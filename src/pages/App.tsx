import { redirect, replace, useNavigate } from "react-router"
import PasswordInput from "../components/password-input"
import { Button } from "../components/ui/button"
import { ROUTES } from "../constants/constant-routes"

function App() {
	const navigate = useNavigate()
	function handleClick() {
		console.log("clicked")
		navigate(ROUTES.home)
	}
	return (
		<div className=" ">
			<PasswordInput />
			<Button onClick={handleClick}>Click Me</Button>
		</div>
	)
}

export default App
