import { type RouteConfig, route } from ""

export default [
	route("some/path", "./some/file.tsx"),
	// pattern ^           ^ module file
] satisfies RouteConfig
