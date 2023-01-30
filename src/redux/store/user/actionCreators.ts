import { createAction } from '@reduxjs/toolkit';

import { USER_LOGIN, USER_LOGOUT } from './actionTypes';

export const userLogin = createAction(USER_LOGIN);

export const userLogout = createAction(USER_LOGOUT);
