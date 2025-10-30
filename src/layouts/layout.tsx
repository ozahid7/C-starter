import { Outlet } from "react-router";
import BreakPoints from "@/providers/break-point-provider";

export default function GlobalLayout() {
	return (
		<div className="min-h-dvh relative h-auto w-full flex flex-col">
			<BreakPoints />
			<Outlet />
		</div>
	);
}
