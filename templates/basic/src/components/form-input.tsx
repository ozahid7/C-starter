import type { ComponentProps } from "react";
import { Controller, useFormContext } from "react-hook-form";
import PasswordInput from "./password-input";
import { Field, FieldError, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";

export default function FormInput({
	name,
	id,
	...rest
}: ComponentProps<"input"> & {
	name: string;
	id?: string;
}) {
	const { control } = useFormContext();
	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState }) => (
				<Field data-invalid={fieldState.invalid}>
					<FieldLabel htmlFor={id}>{name}</FieldLabel>
					{rest.type === "password" ? (
						<PasswordInput
							{...rest}
							{...field}
							id={id}
							aria-invalid={fieldState.invalid}
						/>
					) : (
						<Input
							{...rest}
							{...field}
							id={id}
							aria-invalid={fieldState.invalid}
						/>
					)}
					{fieldState.invalid && (
						<FieldError errors={[fieldState.error]} />
					)}
				</Field>
			)}
		/>
	);
}
