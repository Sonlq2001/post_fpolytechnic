import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "./slices/post.slice";

const store = configureStore({
	reducer: {
		post: postReducer,
	},
});

export default store;
