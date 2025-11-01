import { ModeToggle } from "./mode-toggle";

export default function NavBar() {
	return (
		<nav className="h-24 w-full flex items-center px-8 justify-between">
			<span className="font-semibold size-10 p-1.5 text-background aspect-square text-xl bg-foreground rounded-lg flex chv">
				CS
			</span>

			<ModeToggle />
		</nav>
	);
}
