import { combineReducers } from "@reduxjs/toolkit";
import { categoryReducer } from "./../admin/pages/category/redux/categorySlice";
const rootReducer = combineReducers({
	category: categoryReducer,
});

export default rootReducer;
