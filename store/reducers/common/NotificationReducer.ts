import { AppState } from '@/store';
import { NotificationInterface } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: NotificationInterface = {
    show: false,
    message: '',
    type: 'info',
    position: 'bottom-left'
}

export const NotificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        setNotification: (state, action) => {
            let data = action.payload;
            if(!data.show) data = initialState;
            state.show = data.show;
            state.message = data.message;
            state.type = data.type ? data.type : initialState.type;
            state.position = data.position ? data.position : initialState.position;
        },
    },
});

export const { setNotification } = NotificationSlice.actions;
export const selectNotification = (state: AppState) => state.notification;
export default NotificationSlice.reducer;