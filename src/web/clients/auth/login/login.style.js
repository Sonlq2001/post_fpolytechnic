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
