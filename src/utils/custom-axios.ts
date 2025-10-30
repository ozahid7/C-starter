import axios from "axios"
import { type AxiosInstance, type AxiosResponse, AxiosError } from "axios"
import { toast } from "sonner"
import { Navigate } from "react-router"
import type { ApiError, ApiResponse, RefreshTokenResponse } from "@/types/axios"

const base_url = `${import.meta.env.VITE_B_URL}`
const api: AxiosInstance = axios.create({
	baseURL: base_url,
	withCredentials: true,
})

export async function refreshToken() {
	try {
		// const headers: Record<string, string> = {
		//     // "csrf-token": (await SecureStore.getItemAsync("csrfToken")) || "",
		// };
		const res = await api.request({
			method: "get",
			url: "/api/auth/refresh",
			withCredentials: true,
			// headers,
		})
		return res.data as RefreshTokenResponse
	} catch (e) {
		if (e instanceof AxiosError) {
			toast.error("Session expired. Please log in again.") // to remove
			Navigate({ to: "/login", replace: true })
		}
	}
}

const Caxios = async <T>(
	method: "get" | "post" | "put" | "patch" | "delete",
	url: string,
	data?: any
): Promise<ApiResponse<T>> => {
	const savedLang = localStorage.getItem("preferredLanguage") || "fr"
	const headers: Record<string, string> = {
		// "csrf-token": (await SecureStore.getItemAsync("csrfToken")) || "",
		"Accept-Language": savedLang,
	}
	if (data instanceof FormData) {
		headers["Content-Type"] = "multipart/form-data"
	}
	try {
		const response: AxiosResponse<T> = await api.request<T>({
			method,
			url,
			withCredentials: true,
			data,
			headers,
		})
		return response.data as ApiResponse<T>
	} catch (error) {
		const axiosError = error as AxiosError
		if (axiosError.response?.status === 401) {
			const responseData = axiosError.response.data as ApiError
			const { message } = responseData.errorDetails
			if (message[0] === "Invalid or expired token") {
				await refreshToken()
				const response: AxiosResponse<T> = await api.request<T>({
					method,
					url,
					withCredentials: true,
					data,
					headers,
				})
				const d = response.data as ApiResponse<T>
				return d
			}
		}
		throw axiosError.response?.data
	}
}

export default Caxios
