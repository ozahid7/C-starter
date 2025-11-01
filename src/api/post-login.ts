import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import Caxios from "@/utils/custom-axios";

export const useLogin = () => {
	async function postLogin(data: any) {
		try {
			const res = await Caxios("post", "/api/auth/login", data);
			return res.data;
		} catch (error) {
			if (error instanceof AxiosError) throw error;
			throw error;
		}
	}

	return useMutation({
		mutationFn: postLogin,
	});
};
