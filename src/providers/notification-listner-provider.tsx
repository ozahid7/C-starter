import { type ReactNode, useEffect } from "react";
import { toast } from "sonner";
import { useSocket } from "./socket-provider";

export default function NotificationListnerProvider({
	children,
}: {
	children: ReactNode;
}) {
	const socket = useSocket();

	useEffect(() => {
		if (socket.listeners("example").length === 0) {
			socket.on("example", () => {
				toast.success("Example notification received");
			});
		}
		return () => {
			socket.off("example");
		};
	}, [socket]);
	return <>{children}</>;
}
