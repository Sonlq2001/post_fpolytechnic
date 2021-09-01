import { api } from "./../../../../api/api";

const categoryApi = {
	getAll() {
		const url = "/categories";
		return api.get(url);
	},
};

export default categoryApi;
