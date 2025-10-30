import Caxios from "@/utils/custom-axios"
import { useMutation } from "@tanstack/react-query"
import { AxiosError } from "axios"

export const usePostLogin = () => {
	return useMutation({
		mutationFn: async (data: any) => {
			try {
				const result = await Caxios("post", `/api/auth/login`, data)
				return result
			} catch (e) {
				if (e instanceof AxiosError) {
					throw e
				}
				throw e
			}
		},
	})
}
