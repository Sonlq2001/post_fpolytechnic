import { createAsyncThunk } from "@reduxjs/toolkit";
import categoryApi from "./../../api/categoryApi";
export const fetchCategory = createAsyncThunk("fetch/category", async () => {
	try {
		const response = await categoryApi.getAll();
		return response.data.data;
	} catch (error) {}
});

export const addCategory = createAsyncThunk("add/category", async (cate) => {
	try {
		const response = await categoryApi.add(cate);
		return response.data;
	} catch (error) {}
});
