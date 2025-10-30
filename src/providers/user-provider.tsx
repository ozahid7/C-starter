import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useUser } from "@/api/get-user";

const userContext = React.createContext<{ user: any } | null>(null);

export default function UserProvider({ children }: { children: React.ReactNode }) {
	const { data, isLoading } = useUser();
	const navigate = useNavigate();

	useEffect(() => {
		if (!data && !isLoading) navigate("");
	}, [data, isLoading, navigate]);

	if (isLoading) return <div className="min-h-[700px] items-center justify-center flex"></div>;

	if (!data) return null;

	const { data: user } = data;
	return <userContext.Provider value={{ user }}>{children}</userContext.Provider>;
}

export const useGlobalUser = () => {
	const user = React.useContext(userContext);
	if (!user) {
		throw new Error("useUser must be used within a UserProvider");
	}
	return user;
};
