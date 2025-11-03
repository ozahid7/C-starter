import { CheckCheck, Command, Copy } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export default function QuickStart() {
	const [isCopied, setIsCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText("npx create-cstarter my-app");
		setIsCopied(true);
		setTimeout(() => setIsCopied(false), 2000);
	};

	return (
		<div className="bg-background mt-10 p-6 rounded-lg">
			<div className="flex justify-between items-center">
				<h2 className="font-semibold">Quick Start</h2>
			</div>
			<div className="flex  mt-5 gap-4 bg-soft-background p-4 rounded-lg justify-between items-center px-4 relative min-w-60 max-w-lg md:w-[50vw] w-[80vw]">
				<div className="flex items-center gap-0  sm:gap-4">
					<Command className="mr-4 " />
					<p className="text-sm sm:text-[1rem]">
						npx create-cstarter my-app
					</p>
				</div>
				<Button
					onClick={handleCopy}
					onTouchStart={handleCopy}
					variant={"ghost"}
					className="border"
					size={"icon-sm"}
				>
					<CheckCheck
						className={cn("scale-100 rotate-0 transition-all ", {
							"scale-0 rotate-90": !isCopied,
						})}
					/>
					<Copy
						className={cn(
							"absolute  scale-100 rotate-0 transition-all",
							{ "scale-0 rotate-90": isCopied },
						)}
					/>
				</Button>
			</div>
		</div>
	);
}
