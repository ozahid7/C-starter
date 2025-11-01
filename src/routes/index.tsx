import { createFileRoute } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import NavBar from "@/components/nav-bar";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex-1 flex max-w-7xl mx-auto w-full flex-col">
			<NavBar />
			<section className="flex-1 gap-4 flex items-center justify-center flex-col chv">
				<h1 className="sm:text-5xl text-2xl xl:text-6xl font-semibold">
					Custom Starter*
				</h1>
				<p className="text-lg text-center max-w-2xl text-muted-foreground">
					Everything you need to launch your vite app preconfigured,
					optimized, and ready to go.
				</p>
				<Button className="mt-2">
					<span>Documentation</span>
					<ChevronRight className="size-5" />
				</Button>
			</section>
		</div>
	);
}
