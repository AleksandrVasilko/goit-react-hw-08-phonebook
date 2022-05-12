import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import thunk from "redux-thunk";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

export const singUp = createAsyncThunk('auth/singUp', async values => {
    try {
        const { data } = await axios.post('/user/singup', values);
        token.set(data.token);
        return data;
    } catch (error) {
        console.log(error);
    }
});

export const singIn = createAsyncThunk('auth/singIn', async values => {
    try {
        const { data } = await axios.post('/user/login', values);
        console.log(data);
        token.set(data.token);
        return data;
    } catch (error) {
        console.log(error);
    }
});

export const logout = createAsyncThunk('auth/logout', async () => {
    try {
        await axios.post('/user/logout');
        token.unset();
    } catch (error) {
        console.log(error);
    }
});

export const refreshCurrentUser = createAsyncThunk(
    'auth/current',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const saveToken = state.auth.token;
        if (saveToken === null) {
            return thunkAPI.rejectWithValue();
        }
        token.set(saveToken);
        try {
            const { data } = await axios.get('/users/current');
            return data;
        } catch (error) {
            console.log(error);
        }
    },
);