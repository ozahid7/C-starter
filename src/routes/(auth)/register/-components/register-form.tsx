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
import { useRegister } from "@/routes/(auth)/register/-api/post-register";

const formSchema = z
	.object({
		email: z.email("Invalid email address."),
		username: z
			.string()
			.min(3, { message: "Username must be at least 3 characters long" }),
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
	});

export type RegisterFormType = z.infer<typeof formSchema>;

export function RegisterForm() {
	const form = useForm<RegisterFormType>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
			username: "",
			confirmPassword: "",
		},
	});

	const { mutateAsync: register } = useRegister();

	const onSubmit = async (data: RegisterFormType) => {
		await register(data);
	};

	return (
		<Card className="w-full sm:max-w-md">
			<CardHeader className="text-center space-y-2">
				<CardTitle className="text-2xl">Register</CardTitle>
				<CardDescription>
					Enter your email and password to create a new account.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form
						id="register-form"
						onSubmit={form.handleSubmit(onSubmit)}
					>
						<FieldGroup>
							<FormInput
								name="email"
								id="register-email"
								placeholder="example@email.com"
							/>
							<FormInput
								name="username"
								id="register-username"
								placeholder="Your username"
							/>
							<FormInput
								name="password"
								id="register-password"
								placeholder="*********"
								type="password"
							/>
							<FormInput
								name="confirmPassword"
								id="register-confirm-password"
								placeholder="*********"
								type="password"
							/>
						</FieldGroup>
					</form>
				</Form>
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
	);
}
