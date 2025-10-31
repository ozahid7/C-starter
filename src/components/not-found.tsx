import { MoveLeft } from "lucide-react"
import { cn } from "../lib/utils"
import { buttonVariants } from "./ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./ui/card"
import { Link } from "@tanstack/react-router"

export default function NotFoundPage() {
	return (
		<div
			className={cn(
				"h-svh flex justify-center  items-center w-screen bg-background text-foreground"
			)}
		>
			<Card className="w-lg bg-muted ">
				<CardHeader className="justify-center">
					<CardTitle className="text-7xl mx-auto font-poppins ">
						404
					</CardTitle>
					<CardDescription>
						La page que vous recherchez est introuvable!
					</CardDescription>
				</CardHeader>
				<CardContent className="sr-only"></CardContent>
				<CardFooter>
					<Link
						to="/"
						className={cn(
							buttonVariants({ variant: "outline" }),
							"mx-auto gap-3"
						)}
					>
						<MoveLeft />
						<span className="">Retour à l'accueil</span>
					</Link>
				</CardFooter>
			</Card>
		</div>
	)
}
