import { takeEvery, call, put } from 'redux-saga/effects';
import { loginUser, logOutUser } from 'api/api';
import { USER_LOGIN, USER_LOGOUT } from '../user/actionTypes';

import { setUserDataAction } from '../user/actionCreators';

function* userLoginWorkerSaga(action: {
	type: string;
	payload: { email: string; password: string };
}) {
	const { payload } = action;
	const { data } = yield call(loginUser, payload);
	const { user } = data;

	const userData = {
		...user,
		token: data.result.split(' ')[1],
	};

	yield put(setUserDataAction(userData));
}

function* userLogOutWorkerSaga(action: { type: string; payload: string }) {
	console.log(action);

	const res = yield call(logOutUser, action.payload);

	console.log('res', res);
}

function* watcherSaga() {
	yield takeEvery(USER_LOGIN, userLoginWorkerSaga);
	yield takeEvery(USER_LOGOUT, userLogOutWorkerSaga);
}

export default function* rootSaga() {
	yield watcherSaga();
}
