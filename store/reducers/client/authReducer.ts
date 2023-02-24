import { AppState, AppThunk } from '@/store';
import { createSlice } from '@reduxjs/toolkit';

export const AuthSlice = createSlice({
    name: 'auth',

    initialState: {
        isAuthenticated: false,
        user: null
    },

    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
    }
});

export const { setUser } = AuthSlice.actions;

export const selectAuth = (state: AppState) => state.auth;

export const fetchUser = (): AppThunk => async dispatch => {
    const timeoutPromise = (timeout: number) => new Promise(resolve => setTimeout(resolve, timeout));
    await timeoutPromise(200);

    dispatch(
        setUser({
            name: 'Abdullah',
            email: 'amsshoyon@gmail.com',
            username: 'amsshoyon',
            phoneNumber: '01978937278',
            token: 'abcdef123456',
        })
    );
};


export default AuthSlice.reducer;