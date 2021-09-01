import React, { useState } from "react";
import { Icon } from "rsuite";
import { useField, ErrorMessage } from "formik";
import {
	FormGroup,
	FormInput,
	FormLabel,
	ShowPassword,
	WrapInput,
} from "../../../clients/auth/login/login.style";
const InputPasswordForm = (props) => {
	const [isPassword, setShowPassword] = useState(false);
	const [field, meta] = useField(props);
	const { error } = meta;
	const activeError = error === undefined ? "" : "error-msg";
	return (
		<WrapInput>
			<FormGroup>
				<FormInput
					type={isPassword ? "text" : "password"}
					{...field}
					placeholder=" "
					className={activeError}
				/>
				<ShowPassword onClick={() => setShowPassword(!isPassword)}>
					<Icon icon={isPassword ? "eye-slash" : "eye"} />
				</ShowPassword>
				<FormLabel htmlFor="" className={activeError}>
					Password
				</FormLabel>
			</FormGroup>
			<ErrorMessage component="div" name={field.name} className={activeError} />
		</WrapInput>
	);
};

export default InputPasswordForm;
