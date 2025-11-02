import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";
import { buttonVariants } from "./ui/button";

export default function NavBar() {
	return (
		<nav className="md:h-20 h-16 w-full flex border-b border-border/60">
			<div className="flex-1 px-4 lg:px-8 flex items-center justify-between">
				<Link
					to="/"
					className={cn(
						buttonVariants({
							variant: "ghost",
							size: "icon",
							className:
								"dark:hover:bg-foreground/90 hover:text-background hover:bg-foreground/90 ",
						}),
						"bg-foreground text-background font-semibold ",
					)}
				>
					CS
				</Link>

				<ModeToggle />
			</div>
		</nav>
	);
}
