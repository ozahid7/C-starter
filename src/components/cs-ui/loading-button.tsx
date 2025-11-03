import { Loader } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function LoadingButton({
	children,
	isLoading,
	className,
	...rest
}: ComponentProps<"button"> & {
	children: ReactNode;
	isLoading?: boolean;
	className?: string;
}) {
	return (
		<Button
			className={cn("min-w-24", className)}
			disabled={isLoading}
			{...rest}
		>
			{isLoading ? <Loader className="animate-spin" /> : children}
		</Button>
	);
}
