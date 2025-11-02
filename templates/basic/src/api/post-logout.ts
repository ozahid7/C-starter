import {
	type UseMutationResult,
	useMutation,
	useQueryClient,
} from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { toast } from "sonner";
import type { RegisterFormType } from "@/routes/(auth)/register/-components/register-form";
import Caxios from "@/utils/custom-axios";

const postLogout = async (): Promise<void> => {
	await Caxios("get", `/api/auth/logout`);
};

export const useLogout = (): UseMutationResult<
	void,
	AxiosError,
	RegisterFormType
> => {
	const client = useQueryClient();
	return useMutation({
		mutationFn: postLogout,
		onError: (_error) => {
			toast.error("Logout failed");
		},
		onSuccess: () => {
			toast.success("Logout successful");
			client.removeQueries();
		},
	});
};
