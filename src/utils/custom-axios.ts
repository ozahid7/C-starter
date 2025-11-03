import axios, {
	AxiosError,
	type AxiosInstance,
	type AxiosResponse,
	type InternalAxiosRequestConfig,
} from "axios";
import type { CustomApiError, CustomApiResponse } from "@/types/axios";

type FailedReq = {
	resolve: (value?: unknown) => void;
	reject: (error: any) => void;
	config: InternalAxiosRequestConfig;
};

let isRefreshing = false;
let failedQueue: FailedReq[] = [];

const base_url =
	import.meta.env.VITE_B_URL || "https://212.scinc-annotation.com/api";

const api: AxiosInstance = axios.create({
	baseURL: base_url,
	withCredentials: true,
});

function processQueue(error: any, token: string | null = null) {
	failedQueue.forEach((prom) => {
		if (error) {
			prom.reject(error);
		} else {
			if (token && prom.config.headers) {
				prom.config.headers["Authorization"] = "Bearer " + token;
			}
			prom.resolve(api(prom.config));
		}
	});
	failedQueue = [];
}

const refreshApi: AxiosInstance = axios.create({
	baseURL: base_url,
	withCredentials: true,
});

export async function refreshToken() {
	try {
		const res = await refreshApi.request({
			method: "get",
			url: "/auth/refresh",
			withCredentials: true,
		});
		return res.data as CustomApiResponse<{ accessToken: string }>;
	} catch (e) {
		if (e instanceof AxiosError) {
			throw e.response?.data;
		}
		throw e;
	}
}

api.interceptors.response.use(
	(response) => response,
	(error) => {
		const originalRequest = error.config;

		if (!error.response || error.response.status !== 401)
			return Promise.reject(error);

		// Avoid trying to refresh when the request itself is the refresh endpoint
		if (
			originalRequest.url &&
			originalRequest.url.includes("/auth/refresh")
		) {
			return Promise.reject(error);
		}

		if (originalRequest._retry) {
			// Already retried — forward
			return Promise.reject(error);
		}

		if (isRefreshing) {
			// Queue the request until refresh completes
			return new Promise((resolve, reject) => {
				failedQueue.push({
					resolve,
					reject,
					config: originalRequest,
				});
			});
		}

		isRefreshing = true;

		// Call refreshAccessToken (which calls refresh endpoint using a dedicated axios instance)
		return new Promise((resolve, reject) => {
			refreshToken()
				.then((data) => {
					processQueue(null, data.data.accessToken);
					// set header for original request and retry
					if (originalRequest.headers) {
						originalRequest.headers["Authorization"] =
							`Bearer ${data.data.accessToken}`;
					}
					originalRequest._retry = true;
					resolve(api.request(originalRequest));
				})
				.catch((err) => {
					processQueue(err, null);
					reject(err);
				})
				.finally(() => {
					isRefreshing = false;
				});
		});
	},
);

const Caxios = async <T>(
	method: "get" | "post" | "put" | "patch" | "delete",
	url: string,
	data?: any,
): Promise<CustomApiResponse<T>> => {
	const headers: Record<string, string> = {};
	if (data instanceof FormData) {
		headers["Content-Type"] = "multipart/form-data";
	}
	try {
		const response: AxiosResponse<T> = await api.request<T>({
			method,
			url,
			withCredentials: true,
			data,
			headers,
		});
		return response.data as CustomApiResponse<T>;
	} catch (error) {
		const axiosError = error as AxiosError;
		if (!axiosError.response)
			throw new Error("Network Error: No response received from server");
		const customError = axiosError.response?.data as CustomApiError;
		throw Error(
			typeof customError.errorDetails.message === "string"
				? customError.errorDetails.message
				: customError.errorDetails.message?.[0] || "An error occurred",
		);
	}
};

export default Caxios;
