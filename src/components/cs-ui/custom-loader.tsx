import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export default function CLoader({
	className,
	...rest
}: ComponentProps<"span"> & { className?: string }) {
	return (
		<span
			{...rest}
			className={cn(
				"border-x-2 border-foreground animate-spin rounded-full size-14",
				className,
			)}
		/>
	);
}
