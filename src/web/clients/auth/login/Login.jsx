import React from "react";
import { Button } from "rsuite";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { unwrapResult } from "@reduxjs/toolkit";
import {
	WrapLogin,
	LoginLeft,
	LoginRight,
	FormHeader,
	FormGroup,
	WrapForm,
} from "./login.style";
import LogoFpt from "./../../images/logo-fpt.png";
import InputForm from "../../../components/formCustom/inputForm/InputForm";
import InputPasswordForm from "../../../components/formCustom/inputPassword/InputPasswordForm";
import { login } from "./../redux/authSlice";

const Login = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	return (
		<WrapLogin>
			<LoginLeft></LoginLeft>

			<LoginRight>
				<FormHeader>
					<img src={LogoFpt} alt="" className="form-logo" />
					<p className="form-des">Hệ thống giáo dục FPT</p>
				</FormHeader>
				<WrapForm>
					<h3>Login</h3>
					<Formik
						initialValues={{ email: "", password: "" }}
						onSubmit={async (values) => {
							try {
								const resultResponse = await dispatch(login(values));
								unwrapResult(resultResponse);
								history.push("/admin");
							} catch (error) {}
						}}
						validationSchema={Yup.object({
							email: Yup.string()
								.required("Vui lòng nhập email !")
								.email("Email không phù hợp !"),

							password: Yup.string().required("Vui lòng nhập mật khẩu !"),
						})}
					>
						{() => {
							return (
								<Form>
									<InputForm type="text" name="email" label="Email" />
									<InputPasswordForm name="password" />

									<FormGroup>
										<Button
											type="submit"
											color="orange"
											size="lg"
											style={{ width: "100%", marginTop: "25px" }}
										>
											Login
										</Button>
									</FormGroup>
								</Form>
							);
						}}
					</Formik>

					<a href="!#" className="form-ques">
						Bạn chưa có tài khoản? Đăng kí ?
					</a>
				</WrapForm>
			</LoginRight>
		</WrapLogin>
	);
};

export default Login;
