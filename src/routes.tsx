import { createBrowserRouter } from "react-router"
import { ROUTES } from "./constants/constant-routes"
import GlobalLayout from "./layouts/layout"
import HomePage from "./pages/(main)/home/home-page"
import App from "./pages/App"
import MainLayout from "./layouts/main-layout"

const router = createBrowserRouter([
	{
		path: ROUTES.root,
		element: <GlobalLayout />,
		children: [
			{
				index: true,
				Component: App,
			},
			{
				element: <MainLayout />,
				children: [
					{
						path: ROUTES.home,
						Component: HomePage,
					},
				],
			},
		],
	},
])
export { router }
