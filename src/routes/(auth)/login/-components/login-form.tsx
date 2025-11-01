import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

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

const formSchema = z.object({
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
	email: z.email("Invalid email address."),
})

export type LoginFormType = z.infer<typeof formSchema>

export function LoginForm() {
	const form = useForm<LoginFormType>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	})

	const onSubmit = async (data: LoginFormType) => {
		toast.success("Logged in successfully!")
	}

	return (
		<Card className="w-full sm:max-w-md">
			<CardHeader>
				<CardTitle>Login</CardTitle>
				<CardDescription>
					Enter your email and password to sign in to yours account.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form id="login-form" onSubmit={form.handleSubmit(onSubmit)}>
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
					</FieldGroup>
				</form>
			</CardContent>
			<CardFooter>
				<Field orientation="horizontal" className="justify-end gap-2">
					<LoadingButton
						isLoading={form.formState.isSubmitting}
						form="login-form"
						type="submit"
					>
						Login
					</LoadingButton>
				</Field>
			</CardFooter>
		</Card>
	)
}
