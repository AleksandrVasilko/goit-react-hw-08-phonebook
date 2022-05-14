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
import authSlice from './auth/auth-reduser'

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist:['token'],
}

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authSlice),
        phonebook: contactsReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },


    }).concat(logger),
    devTools: process.env.NODE_ENV === 'development',
});


export const persistor = persistStore(store);