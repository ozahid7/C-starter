import { type UseMutationResult, useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { toast } from "sonner";
import type { RegisterFormType } from "@/routes/(auth)/register/-components/register-form";
import Caxios from "@/utils/custom-axios";

const postRegister = async (data: RegisterFormType): Promise<void> => {
	await Caxios("post", "/auth/register", data);
};
export const useRegister = (): UseMutationResult<
	void,
	AxiosError,
	RegisterFormType
> => {
	return useMutation({
		mutationFn: postRegister,
		onError: (_error) => {
			// Handle error (e.g., show a notification)
			toast.error("Registration failed");
		},
		onSuccess: () => {
			// Handle success (e.g., show a notification)
			toast.success("Registration successful");
		},
	});
};
