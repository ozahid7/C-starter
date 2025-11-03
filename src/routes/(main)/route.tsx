import { createFileRoute } from "@tanstack/react-router";
import NotFoundPage from "@/components/cs-ui/not-found";
import MainLayout from "@/layouts/main-layout";

export const Route = createFileRoute("/(main)")({
	component: MainLayout,
	notFoundComponent: NotFoundPage,
});
