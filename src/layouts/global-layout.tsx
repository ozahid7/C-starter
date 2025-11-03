import { Outlet } from "@tanstack/react-router";
import { Toaster } from "sonner";
import BreakPoints from "@/providers/break-point-provider";
import TanstackProvider from "@/providers/tanstack-provider";
import { useTheme } from "@/providers/theme-provider";

export default function GlobalLayout() {
	const { theme } = useTheme();
	return (
		<main className="min-h-dvh relative h-auto w-full flex flex-col">
			<BreakPoints />
			<Toaster theme={theme} richColors />
			<TanstackProvider>
				<div className="flex flex-1 z-10">
					<Outlet />
				</div>
			</TanstackProvider>
			<div className="w-full h-[60vh] bg-linear-to-t absolute bottom-0 left-0 from-background to-transparent" />
		</main>
	);
}
