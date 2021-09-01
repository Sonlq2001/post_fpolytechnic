import React, { useState } from "react";
import { Icon } from "rsuite";
import { useField, ErrorMessage } from "formik";
import {
	FormGroup,
	FormInput,
	FormLabel,
	ShowPassword,
	WrapInput,
	FormLabelBlock,
} from "../../../clients/auth/login/login.style";
const InputPasswordForm = (props) => {
	const { labelBlock } = props;
	const [isPassword, setShowPassword] = useState(false);
	const [field] = useField(props);

	return (
		<WrapInput>
			<FormGroup>
				{labelBlock && <FormLabelBlock htmlFor="">Password</FormLabelBlock>}
				<FormInput
					type={isPassword ? "text" : "password"}
					{...field}
					placeholder=" "
				/>
				<ShowPassword onClick={() => setShowPassword(!isPassword)}>
					<Icon icon={isPassword ? "eye-slash" : "eye"} />
				</ShowPassword>
				{!labelBlock && <FormLabel htmlFor="">Password</FormLabel>}
			</FormGroup>
			<ErrorMessage component="div" name={field.name} className="error-msg" />
		</WrapInput>
	);
};

export default InputPasswordForm;
