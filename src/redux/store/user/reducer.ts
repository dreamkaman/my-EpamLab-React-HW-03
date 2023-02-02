import { PayloadAction, createReducer } from '@reduxjs/toolkit';
import { setUserDataAction, userLogoutAction } from './actionCreators';

const initialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
};

export interface IUserLoginPayload {
	name: string;
	email: string;
	token: string;
}

export const userReducer = createReducer(initialState, {
	[userLogoutAction.type]: () => {
		return { ...initialState };
	},
	[setUserDataAction.type]: (
		_state,
		action: PayloadAction<IUserLoginPayload>
	) => {
		console.log('Reducer works!');
		return { isAuth: true, ...action.payload };
	},
});
