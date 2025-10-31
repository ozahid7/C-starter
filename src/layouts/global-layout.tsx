import BreakPoints from "@/providers/break-point-provider"
import { useTheme } from "@/providers/theme-provider"
import { Outlet } from "@tanstack/react-router"
import { Toaster } from "sonner"

export default function GlobalLayout() {
	const { theme } = useTheme()
	return (
		<div className="min-h-dvh h-auto w-full flex flex-col">
			<BreakPoints />
			<Toaster theme={theme} richColors />
			<Outlet />
		</div>
	)
}
