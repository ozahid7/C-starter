import React from "react";
import { Input } from "./ui/input";

export default function Test() {
	const [search, setSearch] = React.useState("");

	return (
		<div>
			<Input
				type="text"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
		</div>
	);
}
