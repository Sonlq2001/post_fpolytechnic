import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	data: [],
	loading: false,
};

const postSlice = createSlice({
	name: "post",
	initialState,
	extraReducers: {},
});

export const postReducer = postSlice.reducer;
