import { useQuery } from "@tanstack/react-query"
import { AxiosError } from "axios"
import Caxios from "../utils/custom-axios"

export const useUser = () => {
	async function getUser() {
		try {
			const response = await Caxios<any>("get", "/api/auth/me")
			return response
		} catch (error) {
			if (error instanceof AxiosError) {
				throw error
			}
		}
		return null
	}

	return useQuery({ queryKey: ["user-me"], queryFn: getUser, retry: false })
}
