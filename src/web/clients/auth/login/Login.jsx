import React from "react";
import {
	Form,
	FormGroup,
	ControlLabel,
	FormControl,
	Button,
	ButtonToolbar,
} from "rsuite";
import {
	WrapLogin,
	LoginLeft,
	LoginRight,
	FormHeader,
	WrapForm,
} from "./login.style";
import LogoFpt from "./../../images/logo-fpt.png";

const Login = () => {
	return (
		<WrapLogin>
			<LoginLeft></LoginLeft>

			<LoginRight>
				<FormHeader>
					<img src={LogoFpt} alt="" className="form-logo" />
					<p class="form-des">Hệ thống giáo dục FPT</p>
				</FormHeader>
				<WrapForm>
					<h3>Login</h3>
					<Form>
						<FormGroup>
							<ControlLabel>Email</ControlLabel>
							<FormControl name="email" type="email" />
						</FormGroup>
						<FormGroup>
							<ControlLabel>Password</ControlLabel>
							<FormControl name="password" type="password" />
						</FormGroup>
						<FormGroup>
							<ButtonToolbar>
								<Button appearance="primary" color="orange">
									Login
								</Button>
							</ButtonToolbar>
						</FormGroup>
					</Form>

					<a href="" className="form-ques">
						Bạn chưa có tài khoản? Đăng kí ?
					</a>
				</WrapForm>
			</LoginRight>
		</WrapLogin>
	);
};

export default Login;
