import { cn } from "@/lib/utils"

export default function BreakPoints() {
	const badgeStyle =
		"absolute bottom-2 size-6 lg:bottom-4 right-2 lg:right-4 bg-black chv text-white p-2 border-2 border-white rounded-full h-full w-full font-semibold"
	if (import.meta.env.PROD) {
		return null
	}
	return (
		<div className="absolute bottom-10 size-10 right-10">
			<div className={cn("sm:hidden bg-black flex " + badgeStyle)}>
				XS
			</div>
			<div className={cn("hidden sm:flex md:hidden " + badgeStyle)}>
				SM
			</div>
			<div className={cn("hidden md:flex lg:hidden " + badgeStyle)}>
				MD
			</div>
			<div className={cn("hidden lg:flex xl:hidden " + badgeStyle)}>
				LG
			</div>
			<div className={cn("hidden 2xl:hidden xl:flex " + badgeStyle)}>
				XL
			</div>
			<div className={cn("hidden 2xl:flex 3xl:hidden " + badgeStyle)}>
				2XL
			</div>
		</div>
	)
}
