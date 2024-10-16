import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import wordsReducer from './wordsSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        words: wordsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
