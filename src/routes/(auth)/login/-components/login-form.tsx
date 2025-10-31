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

const formSchema = z.object({
	password: z
		.string()
		.min(8, "Password must be at least 8 characters.")
		.regex(
			/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
			"Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character."
		),
	email: z.email("Invalid email address."),
})

type LoginFormType = z.infer<typeof formSchema>

export function LoginForm() {
	const form = useForm<LoginFormType>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	})

	function onSubmit(data: LoginFormType) {
		toast.success("You submitted the following values:", {
			description: (
				<pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
					<code>{JSON.stringify(data, null, 2)}</code>
				</pre>
			),
			position: "bottom-right",
			classNames: {
				content: "flex flex-col gap-2",
			},
			style: {
				"--border-radius": "calc(var(--radius)  + 4px)",
			} as React.CSSProperties,
		})
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
									<Input
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
					<Button
						type="button"
						variant="outline"
						onClick={() => form.reset()}
					>
						Reset
					</Button>
					<Button form="login-form" type="submit">
						Login
					</Button>
				</Field>
			</CardFooter>
		</Card>
	)
}
