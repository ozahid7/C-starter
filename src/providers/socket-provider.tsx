import type React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { io, type Socket } from "socket.io-client";

const socketContext = createContext<Socket | null>(null);

const SOCKET_URL = import.meta.env.VITE_B_URL;
export default function SocketIoProvider({ children }: { children: React.ReactNode }) {
	const [globalSocket, setGlobalSocket] = useState<Socket | null>(null);

	useEffect(() => {
		if (!globalSocket) {
			try {
				setGlobalSocket(
					io(SOCKET_URL, {
						withCredentials: true,
						transports: ["websocket"],
					}),
				);
			} catch (error) {
				void error;
			}
		}
		return () => {
			globalSocket?.disconnect();
		};
	}, [globalSocket]);
	if (globalSocket) return <socketContext.Provider value={globalSocket}>{children}</socketContext.Provider>;
}

export const useSocket = () => {
	const socket = useContext(socketContext);
	if (!socket) {
		throw new Error("useSocket must be used within a SocketIoProvider");
	}
	return socket;
};
