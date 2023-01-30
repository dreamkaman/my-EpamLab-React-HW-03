import { PayloadAction, createReducer } from '@reduxjs/toolkit';
import { userLogin, userLogout } from './actionCreators';

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
	[userLogin.type]: (state, action: PayloadAction<IUserLoginPayload>) => {
		return { ...state, isAuth: true, ...action.payload };
	},
	[userLogout.type]: () => {
		return { ...initialState };
	},
});
