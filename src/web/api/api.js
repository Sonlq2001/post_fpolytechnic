import axios from "axios";
// import store from "./../redux/store";

const request = (req) => {
	const { token } = JSON.parse(localStorage.getItem("user"));

	if (token) {
		req.headers.Authorization = `Bearer ${token}`;
	}
	return req;
};

const response = (res) => {
	return res;
};

export const api = axios.create({
	baseURL: process.env.REACT_APP_URL,
	headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(request);
api.interceptors.response.use(response);
