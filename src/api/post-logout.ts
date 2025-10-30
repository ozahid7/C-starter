import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import Caxios from "@/utils/custom-axios";

export const usePostLogout = () => {
	async function PostLogout() {
		try {
			await Caxios("get", `/api/auth/logout`);
		} catch (e) {
			if (e instanceof AxiosError) {
				throw e;
			}
			throw e;
		}
	}

	return useMutation({
		mutationKey: ["post-logout"],
		mutationFn: PostLogout,
	});
};
