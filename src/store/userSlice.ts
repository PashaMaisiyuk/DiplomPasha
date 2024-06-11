import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    username: string;
    password: string;
    registrationDate: string;
    isAuthenticated: boolean;
}

const initialState: UserState = {
    username: '',
    password: '',
    registrationDate: '',
    isAuthenticated: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        register: (state, action: PayloadAction<{ username: string; password: string; registrationDate: string }>) => {
            state.username = action.payload.username;
            state.password = action.payload.password;
            state.registrationDate = action.payload.registrationDate;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.username = '';
            state.password = '';
            state.registrationDate = '';
            state.isAuthenticated = false;
        },
    },
});

export const { register, logout } = userSlice.actions;
export default userSlice.reducer;