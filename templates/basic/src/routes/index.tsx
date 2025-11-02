import { createFileRoute } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import NavBar from "@/components/nav-bar";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex-1 shadow flex max-w-7xl bg-soft-background mx-auto w-full flex-col">
			<NavBar />
			<section className="flex-1 relative gap-4 flex px-0 lg:px-6 items-center justify-center flex-col chv">
				<h1 className="sm:text-6xl text-4xl xl:text-7xl font-semibold">
					C'Starter*
				</h1>
				<p className="text-lg sm:text-xl text-center font-light max-w-sm sm:max-w-md  lg:max-w-xl text-muted-foreground">
					Everything you need to launch your vite app preconfigured,
					optimized, and ready to go.
				</p>
				<Button className="mt-2">
					<span>Documentation</span>
					<ChevronRight className="size-5" />
				</Button>
				<div className="w-full h-[40vh] bg-linear-to-b absolute bottom-0 left-0 from-transparent to-background" />
			</section>
		</div>
	);
}
