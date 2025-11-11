export default function useLocalStorage(globalKey?: string) {
	const setItem = (value: string, key?: any) => {
		try {
			localStorage.setItem(
				(key ?? globalKey) || "",
				JSON.stringify(value),
			);
		} catch (_error) {}
	};

	const getItem = (key?: string) => {
		try {
			const item = localStorage.getItem((key ?? globalKey) || "");
			return item ? JSON.parse(item) : undefined;
		} catch (_error) {
			return null;
		}
	};
	const removeItem = (key?: string) => {
		try {
			localStorage.removeItem((key ?? globalKey) || "");
		} catch (_error) {}
	};

	return {
		setItem,
		getItem,
		removeItem,
	};
}
