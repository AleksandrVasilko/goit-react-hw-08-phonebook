import { createSlice } from "@reduxjs/toolkit";
import { signIn, signUp, logout, refreshCurrentUser } from "./auth-operations";

const initialState = {
    user: null,
    token: null,
    isLoggenIn: false,
    isLoading: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [signUp.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggenIn = true;
        },
        [signIn.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggenIn = true;
        },
        [logout.fulfilled](state, action) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggenIn = false;
        },
        [refreshCurrentUser.pending](state) {
            state.isLoading = true;
        },
        [refreshCurrentUser.fulfilled](state, action) {
            state.user = action.payload;
            state.isLoggenIn = true;
            state.isLoading = false;
        },
        [refreshCurrentUser.rejected](state) {
            state.isLoading = false;
        },
    },
});

export default authSlice.reducer;