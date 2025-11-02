import {
	createContext,
	type ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";

const windowResizeContext = createContext<{
	isMobile: boolean;
	isTablet: boolean;
}>({
	isMobile: false,
	isTablet: false,
});
export default function WindowResize({ children }: { children: ReactNode }) {
	const [isMobile, setIsMobile] = useState(false);
	const [isTablet, setIsTablet] = useState(false);
	useEffect(() => {
		setIsMobile(window.innerWidth < 1024);
		setIsTablet(window.innerWidth < 1280);
		function handleResize() {
			setIsMobile(window.innerWidth < 1024);
			setIsTablet(window.innerWidth < 1280);
		}
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	return (
		<windowResizeContext.Provider value={{ isMobile, isTablet }}>
			{children}
		</windowResizeContext.Provider>
	);
}

export function useBreakPoint() {
	const breakPoint = useContext(windowResizeContext);
	if (breakPoint) return breakPoint;
	throw new Error(
		"useBreakPoint must be used within a WindowResize provider",
	);
}
