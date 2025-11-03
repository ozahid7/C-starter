import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import FormInput from "@/components/cs-ui/form-input";
import LoadingButton from "@/components/cs-ui/loading-button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup } from "@/components/ui/field";
import { Form } from "@/components/ui/form";
import { useLogin } from "@/routes/(auth)/login/-api/post-login";

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
});

export type LoginFormType = z.infer<typeof formSchema>;

export function LoginForm() {
	const form = useForm<LoginFormType>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const { mutateAsync: login } = useLogin();

	const onSubmit = async (data: LoginFormType) => {
		await login(data);
	};

	return (
		<Card className="w-full sm:max-w-md">
			<CardHeader className="text-center space-y-2">
				<CardTitle className="text-2xl">Login</CardTitle>
				<CardDescription>
					Enter your email and password to sign in to yours account.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form
						id="login-form"
						onSubmit={form.handleSubmit(onSubmit)}
					>
						<FieldGroup>
							<FormInput
								name="email"
								id="login-email-input"
								placeholder="example@email.com"
							/>
							<FormInput
								name="password"
								id="login-password-input"
								type="password"
								placeholder="Your password"
							/>
						</FieldGroup>
					</form>
				</Form>
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
	);
}
