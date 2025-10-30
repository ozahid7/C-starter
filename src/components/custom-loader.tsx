import { cn } from "@/lib/utils";

export default function CustomLoader({ className }: { className?: string }) {
	return (
		<div className={cn("flex-1 min-h-dvh items-center justify-center flex", className)}>
			<div className="border-x-2 border-foreground animate-spin rounded-full size-40"></div>
		</div>
	);
}
