import { createAction } from '@reduxjs/toolkit';

import { SET_USER_DATA, USER_LOGIN, USER_LOGOUT } from './actionTypes';

import { IReqUser } from 'components/Login/Login';
import { IUserLoginPayload } from './reducer';

export const userLoginAction = createAction<IReqUser, 'USER_LOGIN'>(USER_LOGIN);

export const userLogoutAction = createAction(USER_LOGOUT);

export const setUserDataAction = createAction<
	IUserLoginPayload,
	'SET_USER_DATA'
>(SET_USER_DATA);
