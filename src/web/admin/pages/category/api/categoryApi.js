import { api } from "./../../../../api/api";

const categoryApi = {
	getAll() {
		const url = "/categories";
		return api.get(url);
	},

	add(cate) {
		const url = "/categories";
		return api.post(url, cate);
	},
};

export default categoryApi;
