import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import playerReducer from './player';

export const store = configureStore({
    reducer: {
        player: playerReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false,
    }),
});
