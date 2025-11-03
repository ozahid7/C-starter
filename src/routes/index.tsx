import { createFileRoute } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import NavBar from "@/components/nav-bar";
import QuickStart from "@/components/quick-start";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex-1 border border-border/40 flex max-w-7xl bg-soft-background mx-auto w-full flex-col">
			<NavBar />
			<section className="flex-1 gap-4 flex px-0 lg:px-6 flex-col items-center  ">
				<section className="pt-[10%] pb-[2%] flex flex-col gap-6 items-center">
					<h1 className="sm:text-6xl text-4xl xl:text-7xl font-semibold">
						C'Starter*
					</h1>
					<p className="text-lg sm:text-xl text-center font-light max-w-sm sm:max-w-md  lg:max-w-xl text-muted-foreground">
						Everything you need to launch your vite app
						preconfigured, optimized, and ready to go.
					</p>
				</section>
				<section className="flex flex-col chv gap-6">
					<QuickStart />
					<Button className="mt-2 w-fit">
						<span>Documentation</span>
						<ChevronRight className="size-5" />
					</Button>
				</section>
			</section>
		</div>
	);
}
