import Caxios from "@/utils/custom-axios"
import { useMutation } from "@tanstack/react-query"
import { AxiosError } from "axios"

export const usePostRegister = () => {
	async function postRegister(data: any) {
		try {
			const res = await Caxios("post", "/auth/register", data)
			return res.data
		} catch (error) {
			if (error instanceof AxiosError) throw error
			throw error
		}
	}

	return useMutation({
		mutationFn: postRegister,
	})
}
