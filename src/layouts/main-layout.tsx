import { Outlet } from "@tanstack/react-router";

export default function MainLayout() {
	return (
		<div className="flex-1">
			<h1 className="mx-auto text-6xl font-bold">Main Layout</h1>
			<Outlet />
		</div>
	);
}
