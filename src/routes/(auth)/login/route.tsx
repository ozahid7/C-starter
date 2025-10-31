import { createFileRoute } from "@tanstack/react-router"
import { LoginForm } from "./-components/login-form"

export const Route = createFileRoute("/(auth)/login")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<div className="flex-1 flex chv flex-col">
			<LoginForm />
		</div>
	)
}
