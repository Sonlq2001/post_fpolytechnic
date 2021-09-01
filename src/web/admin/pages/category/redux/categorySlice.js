import { createSlice } from "@reduxjs/toolkit";
import { fetchCategory } from "./actions/categoryAction";

const initialState = {
	data: [],
	loading: false,
};

const categorySlice = createSlice({
	name: "category",
	initialState,
	extraReducers: {
		[fetchCategory.pending]: (state) => {
			state.loading = true;
		},

		[fetchCategory.fulfilled]: (state, action) => {
			state.data = action.payload;
			state.loading = false;
		},

		[fetchCategory.rejected]: (state) => {
			state.loading = true;
		},
	},
});

export const categoryReducer = categorySlice.reducer;
