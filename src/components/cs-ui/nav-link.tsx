import { Link, useLocation } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

export default function NavLink({
	children,
	className,
	...rest
}: ComponentProps<typeof Link> & { children: ReactNode; className?: string }) {
	const path = useLocation().pathname;
	return (
		<Link
			activeOptions={{ exact: path.includes(rest.to as string) }}
			className={cn(buttonVariants({ variant: "ghost" }), className)}
			activeProps={{
				className: "bg-muted rounded-lg font-medium",
			}}
			{...rest}
		>
			{children}
		</Link>
	);
}
