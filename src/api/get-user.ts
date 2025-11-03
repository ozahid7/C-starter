import { type UseQueryResult, useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import Caxios from "../utils/custom-axios";

type UserDetails = {
	id: string;
	name: string;
	email: string;
};
const getUser = async (): Promise<UserDetails> => {
	const response = await Caxios<UserDetails>("get", "/api/auth/me");
	return response.data;
};

export const useUser = (): UseQueryResult<UserDetails, AxiosError> => {
	return useQuery({ queryKey: ["user"], queryFn: getUser, retry: false });
};
