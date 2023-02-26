import { configureStore, ThunkAction } from '@reduxjs/toolkit';
import { Action } from 'redux';
import { clientStore } from './clientStore';
import NotificationReducer from './reducers/common/NotificationReducer';

export const store = configureStore({
	reducer: {
        ...clientStore,
		notification: NotificationReducer,
	},
  	devTools: true,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
	),
})

const makeStore = () => store;
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;