import { type UseMutationResult, useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { toast } from "sonner";
import type { LoginFormType } from "@/routes/(auth)/login/-components/login-form";
import Caxios from "@/utils/custom-axios";

const postLogin = async (payload: LoginFormType): Promise<void> => {
	await Caxios("post", "/auth/login", payload);
};

export const useLogin = (): UseMutationResult<
	void,
	AxiosError,
	LoginFormType
> => {
	return useMutation({
		mutationFn: postLogin,
		onError: (_error) => {
			toast.error(_error.message);
		},
		onSuccess: () => {
			toast.success("Login successful");
		},
	});
};
