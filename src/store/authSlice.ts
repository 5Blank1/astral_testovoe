import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {AuthState} from "../types";

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<{ username: string }>) {
            state.isAuthenticated = true;
            state.user = { username: action.payload.username };
        },
        logout(state) {
            state.isAuthenticated = false;
            state.user = null;
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;