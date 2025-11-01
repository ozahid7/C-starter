import { useNavigate } from "@tanstack/react-router";
import React, { useEffect } from "react";
import { useUser } from "@/api/get-user";
import CustomLoader from "@/components/custom-loader";

const userContext = React.createContext<{ user: any } | null>(null);

export default function AuthProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const { data: user, isLoading } = useUser();
	const navigate = useNavigate();

	useEffect(() => {
		if (!user && !isLoading) navigate({ to: "/login", replace: true });
	}, [user, isLoading, navigate]);

	if (isLoading)
		return (
			<div className=" flex-1 items-center justify-center flex">
				<CustomLoader />
			</div>
		);

	if (!user) return null;

	return (
		<userContext.Provider value={{ user }}>{children}</userContext.Provider>
	);
}

export const useGlobalUser = () => {
	const user = React.useContext(userContext);
	if (!user) {
		throw new Error("useUser must be used within a UserProvider");
	}
	return user;
};
