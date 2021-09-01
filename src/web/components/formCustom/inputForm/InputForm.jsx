import React from "react";
import { useField, ErrorMessage } from "formik";
import {
	FormGroup,
	FormInput,
	FormLabel,
	FormLabelBlock,
	WrapInput,
} from "../../../clients/auth/login/login.style";

const InputForm = (props) => {
	const { label, labelBlock } = props;
	const [field] = useField(props);
	return (
		<>
			<WrapInput>
				<FormGroup>
					{labelBlock && <FormLabelBlock htmlFor="">{label}</FormLabelBlock>}
					<FormInput
						type="text"
						placeholder={labelBlock ? label : " "}
						{...field}
					/>
					{!labelBlock && <FormLabel htmlFor="">{label}</FormLabel>}
				</FormGroup>
				<ErrorMessage name={field.name} component="div" className="error-msg" />
			</WrapInput>
		</>
	);
};

export default InputForm;
