import { takeEvery, call, put } from 'redux-saga/effects';
import { getAllCourses, loginUser, logOutUser } from 'api/api';
import { USER_LOGIN, USER_LOGOUT } from '../user/actionTypes';

import { clearUserDataAction, setUserDataAction } from '../user/actionCreators';
import { GET_COURSES } from '../courses/actionTypes';
import {
	clearAllCoursesAction,
	setAllCoursesAction,
} from '../courses/actionCreators';

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
		const res = yield call(logOutUser, action.payload);
		const { status } = res;
		if (status === 200) {
			yield put(clearUserDataAction());
			yield put(clearAllCoursesAction());
		}
	} catch (error) {
		alert(error.message);
	}
}

function* coursesWorkerSaga() {
	try {
		const res = yield call(getAllCourses);
		const {
			data: { result },
		} = res;
		yield put(setAllCoursesAction(result));
	} catch (error) {
		alert(error.message);
	}
}

function* watcherSaga() {
	yield takeEvery(USER_LOGIN, userLoginWorkerSaga);
	yield takeEvery(USER_LOGOUT, userLogOutWorkerSaga);
	yield takeEvery(GET_COURSES, coursesWorkerSaga);
}

export default function* rootSaga() {
	yield watcherSaga();
}
