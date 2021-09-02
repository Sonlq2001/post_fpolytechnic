import { createSlice } from "@reduxjs/toolkit";
import { fetchCategory, addCategory } from "./actions/categoryAction";

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
			console.log(action);
			state.loading = false;
		},

		[fetchCategory.rejected]: (state) => {
			state.loading = true;
		},

		[addCategory.fulfilled]: (state, action) => {
			state.data.push(action.payload);
		},
	},
});

export const categoryReducer = categorySlice.reducer;
