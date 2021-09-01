import React from "react";
import { Button } from "rsuite";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { Title } from "./../../post/actionsPost/styled.postAdd";
import { WrapContent } from "./../../post/style.post";
import InputForm from "./../../../../components/formCustom/inputForm/InputForm";

const CategoryAdd = () => {
	return (
		<WrapContent>
			<Title>Thêm danh mục</Title>

			<div>
				<Formik
					initialValues={{ name: "" }}
					validationSchema={Yup.object().shape({
						name: Yup.string().required("Vui lòng nhập tiêu đề !"),
					})}
					onSubmit={(values) => {
						console.log(values);
					}}
				>
					{() => {
						return (
							<Form>
								<InputForm name="name" label="Name" labelBlock={true} />

								<Button
									type="submit"
									color="blue"
									size="md"
									style={{ marginTop: "20px" }}
								>
									Add
								</Button>
							</Form>
						);
					}}
				</Formik>
			</div>
		</WrapContent>
	);
};

export default CategoryAdd;
