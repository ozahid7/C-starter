import NotFoundPage from "@/components/not-found"
import MainLayout from "@/layouts/main-layout"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/(main)")({
	component: MainLayout,
	notFoundComponent: NotFoundPage,
})
