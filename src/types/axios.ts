export interface ApiResponse<T> {
	success: boolean;
	message: string;
	data: T;
}

export interface ApiError {
	error: boolean;
	errorDetails: {
		error: string;
		message: string[];
		statusCode: number;
	};
}

export interface RefreshTokenResponse {
	success: boolean;
	message: string;
	data: {
		accessToken: string;
		refreshToken: string;
	};
}
