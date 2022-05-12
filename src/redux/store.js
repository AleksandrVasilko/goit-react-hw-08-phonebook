import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from './phonebook/reducers';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import logger from 'redux-logger';
import storage from "redux-persist/lib/storage";
import autSlice from './'

const store = configureStore({
    reducer: { phonebook: contactsReducer },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },


    }).concat(logger),
    devTools: process.env.NODE_ENV === 'development',
});


export default store;