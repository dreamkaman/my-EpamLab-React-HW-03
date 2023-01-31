import { createAction } from '@reduxjs/toolkit';

import { USER_LOGIN, USER_LOGOUT } from './actionTypes';

export const userLoginAction = createAction(USER_LOGIN);

export const userLogoutAction = createAction(USER_LOGOUT);
