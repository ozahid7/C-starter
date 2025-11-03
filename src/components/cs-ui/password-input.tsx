import { Eye, EyeClosed, Loader } from "lucide-react";
import { type ComponentProps, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function PasswordInput({
	className,
	isSearching,
	...props
}: ComponentProps<"input"> & { className?: string; isSearching?: boolean }) {
	const [inputType, setInputType] = useState("password");
	return (
		<div className="relative w-full flex items-center">
			<Button
				size={"icon-sm"}
				variant={"link"}
				type="button"
				className="absolute right-2"
				onClick={() => {
					setInputType(
						inputType === "password" ? "text" : "password",
					);
				}}
			>
				{inputType !== "password" ? (
					<EyeClosed
						className={cn(
							"size-4  text-header/50",
							props["aria-invalid"] && "text-destructive/70",
						)}
					/>
				) : (
					<Eye
						className={cn(
							"size-4 text-header/50",
							props["aria-invalid"] && "text-destructive/70",
						)}
					/>
				)}
			</Button>
			<Input
				placeholder={"***************"}
				className={cn("pr-10", className)}
				type={inputType}
				{...props}
			/>
			{isSearching && (
				<Loader className="size-4 text-primary/40 absolute animate-spin right-7" />
			)}
		</div>
	);
}
