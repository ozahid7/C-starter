import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import PasswordInput from "@/components/password-input"
import LoadingButton from "@/components/loading-button"
import { usePostLogin } from "@/api/post-login"
import { usePostRegister } from "@/api/post-register"

const formSchema = z
	.object({
		email: z.email("Invalid email address."),
		password: z
			.string()
			.min(8, { message: "Password must be at least 8 characters long" })
			.regex(/[A-Z]/, {
				message: "Password must contain at least one uppercase letter",
			})
			.regex(/[a-z]/, {
				message: "Password must contain at least one lowercase letter",
			})
			.regex(/[0-9]/, {
				message: "Password must contain at least one number",
			}),
		confirmPassword: z
			.string()
			.min(1, { message: "Please confirm your password" }),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords do not match",
		path: ["confirmPassword"],
	})

export type RegisterFormType = z.infer<typeof formSchema>

export function RegisterForm() {
	const form = useForm<RegisterFormType>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
			confirmPassword: "",
		},
	})

	const { mutateAsync: register } = usePostRegister()

	const onSubmit = async (data: RegisterFormType) => {
		await register(data)
			.then(() => {
				toast.success("Registration successful! You can now log in.")
			})
			.catch((error) => {
				toast.error(
					error.response?.data?.errorDetails?.message ||
						"An error occurred during registration."
				)
			})
	}

	return (
		<Card className="w-full sm:max-w-md">
			<CardHeader>
				<CardTitle>Register</CardTitle>
				<CardDescription>
					Enter your email and password to create a new account.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form id="register-form" onSubmit={form.handleSubmit(onSubmit)}>
					<FieldGroup>
						<Controller
							name="email"
							control={form.control}
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<FieldLabel htmlFor="login-email-input">
										Email
									</FieldLabel>
									<Input
										{...field}
										id="login-email-input"
										aria-invalid={fieldState.invalid}
										placeholder="example@email.com"
										autoComplete="email"
									/>
									{fieldState.invalid && (
										<FieldError
											errors={[fieldState.error]}
										/>
									)}
								</Field>
							)}
						/>
						<Controller
							name="password"
							control={form.control}
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<FieldLabel htmlFor="login-password-input">
										Password
									</FieldLabel>
									<PasswordInput
										{...field}
										id="login-password-input"
										aria-invalid={fieldState.invalid}
										placeholder="*********"
									/>
									{fieldState.invalid && (
										<FieldError
											errors={[fieldState.error]}
										/>
									)}
								</Field>
							)}
						/>
						<Controller
							name="confirmPassword"
							control={form.control}
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<FieldLabel htmlFor="login-confirm-password-input">
										Confirm Password
									</FieldLabel>
									<PasswordInput
										{...field}
										id="login-confirm-password-input"
										aria-invalid={fieldState.invalid}
										placeholder="*********"
									/>
									{fieldState.invalid && (
										<FieldError
											errors={[fieldState.error]}
										/>
									)}
								</Field>
							)}
						/>
					</FieldGroup>
				</form>
			</CardContent>
			<CardFooter>
				<Field orientation="horizontal" className="justify-end gap-2">
					<LoadingButton
						isLoading={form.formState.isSubmitting}
						form="register-form"
						type="submit"
					>
						Register
					</LoadingButton>
				</Field>
			</CardFooter>
		</Card>
	)
}
