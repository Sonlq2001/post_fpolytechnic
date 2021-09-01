import styled from "styled-components";

export const WrapLogin = styled.div`
	width: 100%;
	display: flex;

	.group-login {
		height: 100% !important;
	}
`;

export const LoginLeft = styled.div`
	width: 60%;
	height: 100vh;
	background-image: url("https://media.itpro.co.uk/image/upload/v1570816546/itpro/2019/02/software_shutterstock_1290773869.jpg");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
`;

export const LoginRight = styled.div`
	width: 40%;
	display: flex;
	text-align: center;
	flex-direction: column;
	align-items: center;
	padding: 2rem 4rem;
`;

export const FormHeader = styled.div`
	margin-bottom: 2rem;

	.form-logo {
		width: 200px;
	}

	.form-des {
		margin-top: -1rem;
	}
`;

export const WrapForm = styled.div`
	h3 {
		margin-bottom: 2rem;
	}

	.form-ques {
		display: inline-block;
		margin-top: 2rem;
	}
`;

export const WrapInput = styled.div`
	div.error-msg {
		color: red;
		font-size: 1.3rem;
		margin-top: 3px;
		text-align: left;
	}

	label.error-msg {
		color: red;
	}

	input.error-msg {
		border: 1px solid red;
	}

	& + & {
		margin-top: 2.5rem;
	}
`;

export const FormGroup = styled.div`
	position: relative;
	width: 30rem;
`;

export const FormLabel = styled.label`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	left: 1.5rem;
	transition: 0.3s;
	padding: 0 5px;
	font-size: 1.5rem;
	background-color: var(--white-color);
	z-index: -1;
`;

export const FormInput = styled.input`
	width: 100%;
	height: 4.5rem;
	outline: none;
	border: 1px solid #ccc;
	border-radius: 5px;
	padding: 0 1.5rem;
	background-color: transparent;
	z-index: 20;

	&:focus {
		border: 1px solid var(--blue-color);
	}

	&:focus ~ ${FormLabel} {
		top: 0;
		font-size: 1.4rem;
		z-index: 10;
	}

	&:-webkit-autofill {
		-webkit-background-clip: text;
	}

	&:not(:placeholder-shown)&:not(:focus) ~ ${FormLabel} {
		top: 0;
		background-color: var(--white-color);
		font-size: 1.4rem;
		z-index: 10;
	}
`;

export const ShowPassword = styled.div`
	position: absolute;
	right: 0;
	top: 50%;
	transform: translateY(-50%);
	cursor: pointer;
	height: 100%;
	display: flex;
	align-items: center;
	padding: 0 1rem;
`;
