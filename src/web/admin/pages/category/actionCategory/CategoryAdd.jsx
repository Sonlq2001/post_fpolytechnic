import React from "react";
import { Button } from "rsuite";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Title } from "./../../post/actionsPost/styled.postAdd";
import { WrapContent } from "./../../post/style.post";
import InputForm from "./../../../../components/formCustom/inputForm/InputForm";
import { addCategory } from "./../redux/actions/categoryAction";

const CategoryAdd = () => {
	const dispatch = useDispatch();
	const history = useHistory();

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
						dispatch(addCategory(values));
						history.push("/admin/categories");
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
