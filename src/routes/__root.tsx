import { createRootRoute } from "@tanstack/react-router";
import NotFoundPage from "@/components/cs-ui/not-found";
import GlobalLayout from "@/layouts/global-layout";

export const Route = createRootRoute({
	component: GlobalLayout,
	notFoundComponent: NotFoundPage,
});
