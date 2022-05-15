import { createSlice } from "@reduxjs/toolkit";
import { signIn, signUp, logout, refreshCurrentUser } from "./auth-operations";

const initialState = {
    user: {name: null, email: null},
    token: null,
    isLoggedIn: false,
    isLoading: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [signUp.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [signIn.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [logout.fulfilled](state, action) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        },
        [refreshCurrentUser.pending](state) {
            state.isLoading = true;
        },
        [refreshCurrentUser.fulfilled](state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isLoading = false;
        },
        [refreshCurrentUser.rejected](state) {
            state.isLoading = false;
        },
    },
});

export default authSlice.reducer;