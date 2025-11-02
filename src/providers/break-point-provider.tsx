import { cn } from "@/lib/utils";

export default function BreakPoints() {
	const badgeStyle =
		"absolute bottom-2 lg:bottom-4 right-2 lg:right-4 bg-foreground text-background chv text-sm  p-4 border-2 border-muted-foreground rounded-full h-full w-full font-semibold";
	if (import.meta.env.PROD) {
		return null;
	}
	return (
		<div className="absolute bottom-10 size-10 right-10">
			<span className={cn("sm:hidden bg-black flex " + badgeStyle)}>
				XS
			</span>
			<span className={cn("hidden sm:flex md:hidden " + badgeStyle)}>
				SM
			</span>
			<span className={cn("hidden md:flex lg:hidden " + badgeStyle)}>
				MD
			</span>
			<span className={cn("hidden lg:flex xl:hidden " + badgeStyle)}>
				LG
			</span>
			<span className={cn("hidden 2xl:hidden xl:flex " + badgeStyle)}>
				XL
			</span>
			<span className={cn("hidden 2xl:flex 3xl:hidden " + badgeStyle)}>
				2XL
			</span>
			<span className={cn("hidden 3xl:flex" + badgeStyle)}>{"+3XL"}</span>
		</div>
	);
}
