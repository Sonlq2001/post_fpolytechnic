import React from "react";
import { useField, ErrorMessage } from "formik";
import {
	FormGroup,
	FormInput,
	FormLabel,
	WrapInput,
} from "../../../clients/auth/login/login.style";

const InputForm = (props) => {
	const [field, meta] = useField(props);
	const { error } = meta;
	const activeError = error === undefined ? "" : "error-msg";
	return (
		<>
			<WrapInput>
				<FormGroup>
					<FormInput
						type="text"
						placeholder=" "
						{...field}
						className={activeError}
					/>
					<FormLabel htmlFor="" className={activeError}>
						Email
					</FormLabel>
				</FormGroup>
				<ErrorMessage
					name={field.name}
					component="div"
					className={activeError}
				/>
			</WrapInput>
		</>
	);
};

export default InputForm;
