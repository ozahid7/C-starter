import axios, {
	type AxiosError,
	type AxiosInstance,
	type AxiosResponse,
} from "axios";

const base_url = `${import.meta.env.VITE_B_URL}`;
const api: AxiosInstance = axios.create({
	baseURL: base_url,
	withCredentials: true,
});

const Caxios = async <T>(
	method: "get" | "post" | "put" | "patch" | "delete",
	url: string,
	data?: any,
): Promise<T> => {
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
		return response.data as T;
	} catch (error) {
		const axiosError = error as AxiosError;
		throw axiosError.response?.data;
	}
};

export default Caxios;
