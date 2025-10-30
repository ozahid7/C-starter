import { createBrowserRouter } from "react-router";
import App from "./App";
import { ROUTES } from "./constants/constant-routes";
import GlobalLayout from "./layouts/layout";

const router = createBrowserRouter([
	{
		path: ROUTES.root,
		element: <GlobalLayout />,
		children: [
			{
				index: true,
				path: ROUTES.home,
				Component: App,
			},
		],
	},
]);
export { router };
