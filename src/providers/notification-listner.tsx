// import { type ReactNode, useEffect } from "react"
// import { useSocket } from "./socket-provider"

// export default function NotificationListner({
// 	children,
// }: {
// 	children: ReactNode
// }) {
// 	const socket = useSocket()

// 	useEffect(() => {
// 		if (socket.listeners("ref").length === 0) {
// 			socket.on("ref", (data: { description: string }) => {})
// 		}
// 		return () => {
// 			socket.off("refetch-notifications")
// 		}
// 	}, [socket])
// 	return <>{children}</>
// }
