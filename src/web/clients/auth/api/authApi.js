import { api } from "./../../../api/api";

const authApi = {
	login(dataForm) {
		const url = "/auth/login";
		return api.post(url, dataForm);
	},
};

export default authApi;
