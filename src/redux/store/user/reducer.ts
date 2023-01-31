import { PayloadAction, createReducer } from '@reduxjs/toolkit';
import { userLoginAction, userLogoutAction } from './actionCreators';

const initialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
};

interface IUserLoginPayload {
	name: string;
	email: string;
	token: string;
}

export const userReducer = createReducer(initialState, {
	[userLoginAction.type]: (state, action: PayloadAction<IUserLoginPayload>) => {
		return { ...state, isAuth: true, ...action.payload };
	},
	[userLogoutAction.type]: () => {
		return { ...initialState };
	},
});
