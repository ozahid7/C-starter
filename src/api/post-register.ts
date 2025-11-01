import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import type { RegisterFormType } from "@/routes/(auth)/register/-components/register-form";
import Caxios from "@/utils/custom-axios";

export const useRegister = () => {
	async function postRegister(data: RegisterFormType) {
		try {
			const res = await Caxios("post", "/auth/register", data);
			return res.data;
		} catch (error) {
			if (error instanceof AxiosError) throw error;
			throw error;
		}
	}

	return useMutation({
		mutationFn: postRegister,
	});
};
