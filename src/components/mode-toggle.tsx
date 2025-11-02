import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/providers/theme-provider";

export function ModeToggle() {
	const { setTheme, theme } = useTheme();

	const handleToggle = () => {
		theme === "light" ? setTheme("dark") : setTheme("light");
	};

	return (
		<Button onClick={handleToggle} variant="outline" size="icon">
			<Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
			<Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}
