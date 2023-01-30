import { createReducer } from '@reduxjs/toolkit';
import { userLogin } from './actionCreators';

const initialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
};

export const userReducer = createReducer(initialState, {
	[userLogin.type]: (state, action) => {
		(state.isAuth = true), (state.name = action.payload.name);
	},
});
