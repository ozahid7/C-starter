import React from "react";
import useLocalStorage from "@/hooks/useLocalStorage";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Test() {
	const [search, setSearch] = React.useState("");

	const { setItem, removeItem } = useLocalStorage("test-key");

	return (
		<div>
			<Input
				type="text"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>

			<Button onClick={() => setItem("hello", "tes")} className="ml-2">
				set
			</Button>
			{/* <Button
				onClick={() => console.log(getItem("tes") || "")}
				className="ml-2"
			>
				get
			</Button> */}
			<Button onClick={() => removeItem("test-key")} className="ml-2">
				remove
			</Button>
		</div>
	);
}
