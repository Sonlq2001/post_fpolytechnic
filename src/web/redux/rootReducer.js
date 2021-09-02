import { combineReducers } from "@reduxjs/toolkit";
import { categoryReducer } from "./../admin/pages/category/redux/categorySlice";
import { authReducer } from "./../clients/auth/redux/authSlice";
const rootReducer = combineReducers({
	category: categoryReducer,
	auth: authReducer,
});

export default rootReducer;
