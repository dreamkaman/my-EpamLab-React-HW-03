import { takeEvery } from 'redux-saga/effects';
// import { userLogin, userLogout } from '../user/actionCreators';
import { USER_LOGIN } from '../user/actionTypes';

export function* workerSaga() {
	console.log("I'm worker!");
	yield;
}

export function* watcherSaga() {
	console.log("I'm watcher!");
	yield takeEvery(USER_LOGIN, workerSaga);
}

export default function* rootSaga() {
	console.log('Hello world from saga!');
	yield watcherSaga();
}
