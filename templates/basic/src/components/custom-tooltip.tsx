import type React from "react";
import type { ComponentProps } from "react";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";

export default function CTooltip({
	children,
	message,
	...rest
}: ComponentProps<typeof TooltipContent> & {
	children: React.ReactNode;
	message: string;
}) {
	return (
		<Tooltip>
			<TooltipTrigger asChild>{children}</TooltipTrigger>
			<TooltipContent
				className="max-w-[300px]  bg-accent-foreground"
				{...rest}
				sideOffset={4}
			>
				<p className="text-wrap">{message}</p>
			</TooltipContent>
		</Tooltip>
	);
}
