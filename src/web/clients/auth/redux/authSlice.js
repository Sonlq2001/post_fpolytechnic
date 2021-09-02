import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authApi from "./../api/authApi";

export const login = createAsyncThunk("login", async (dataForm) => {
	try {
		const response = await authApi.login(dataForm);
		return response.data;
	} catch (error) {}
});

const authSlice = createSlice({
	name: "auth",
	initialState: {
		token: "",
		loading: false,
	},
	extraReducers: {
		[login.pending]: (state) => {
			state.loading = true;
		},
		[login.fulfilled]: (state, action) => {
			state.token = action.payload.token;
			state.loading = false;
			localStorage.setItem("user", JSON.stringify(action.payload));
		},
		[login.rejected]: (state) => {
			state.loading = false;
		},
	},
});

export const authReducer = authSlice.reducer;
