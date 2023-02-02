import { takeEvery, call, put } from 'redux-saga/effects';
import { loginUser, logOutUser } from 'api/api';
import { USER_LOGIN, USER_LOGOUT } from '../user/actionTypes';

import { setUserDataAction } from '../user/actionCreators';

function* userLoginWorkerSaga(action: {
	type: string;
	payload: { email: string; password: string };
}) {
	try {
		const { payload } = action;
		const res = yield call(loginUser, payload);

		const {
			data: { user, result },
		} = res;

		const userData = {
			...user,
			token: result.split(' ')[1],
		};

		yield put(setUserDataAction(userData));
	} catch (error) {
		alert(error.message);
	}
}

function* userLogOutWorkerSaga(action: { type: string; payload: string }) {
	try {
		console.log(action);

		yield call(logOutUser, action.payload);
	} catch (error) {
		console.log(error);
		alert(error.message);
	}
}

function* watcherSaga() {
	yield takeEvery(USER_LOGIN, userLoginWorkerSaga);
	yield takeEvery(USER_LOGOUT, userLogOutWorkerSaga);
}

export default function* rootSaga() {
	yield watcherSaga();
}
