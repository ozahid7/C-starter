export interface CustomApiResponse<T> {
	success: boolean;
	message: string;
	data: T;
}

export interface CustomApiError {
	error: boolean;
	errorDetails: {
		error: string;
		message: string[];
		statusCode: number;
	};
}
