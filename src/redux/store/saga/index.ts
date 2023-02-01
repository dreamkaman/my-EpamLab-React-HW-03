import { takeEvery, call } from 'redux-saga/effects';
import { loginUser } from 'api/api';
import { USER_LOGIN } from '../user/actionTypes';

// import { IData } from 'api/api';

export function* userLoginWorkerSaga(action: {
	type: string;
	payload: { email: string; password: string };
}) {
	console.log("I'm worker!");
	const { payload } = action;
	const { data } = yield call(loginUser, payload);

	console.log(data);
}

export function* watcherSaga() {
	console.log("I'm watcher!");
	yield takeEvery(USER_LOGIN, userLoginWorkerSaga);
}

export default function* rootSaga() {
	console.log('Hello world from saga!');
	yield watcherSaga();
}
