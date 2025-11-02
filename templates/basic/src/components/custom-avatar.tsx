import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export default function CAvatar({
	AvatarclassName,
	fallback,
	...rest
}: {
	AvatarclassName?: string;
	fallback?: string;
} & React.ComponentProps<typeof AvatarImage>) {
	return (
		<Avatar className={cn("", AvatarclassName)}>
			<AvatarImage {...rest} alt="@Image" />
			<AvatarFallback>{fallback}</AvatarFallback>
		</Avatar>
	);
}
