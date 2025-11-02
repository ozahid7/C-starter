import { Loader, Search } from "lucide-react";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";

export default function SearchInput({
	className,
	isSearching,
	...props
}: ComponentProps<"input"> & { className?: string; isSearching?: boolean }) {
	return (
		<div className="relative flex items-center">
			<Search
				className={cn(
					"size-6 absolute text-header/50 left-3",
					props["aria-invalid"] && "text-destructive/70",
				)}
			/>
			<Input
				placeholder={"search"}
				className={cn("pl-12 pr-10", className)}
				{...props}
			/>
			{isSearching && (
				<Loader className="size-4 text-primary/40 absolute animate-spin right-7" />
			)}
		</div>
	);
}
