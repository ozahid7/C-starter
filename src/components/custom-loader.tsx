import { cn } from "@/lib/utils";

export default function CustomLoader({ className }: { className?: string }) {
	return (
		<span
			className={cn(
				"border-x-2 border-foreground animate-spin rounded-full size-14",
				className,
			)}
		/>
	);
}
