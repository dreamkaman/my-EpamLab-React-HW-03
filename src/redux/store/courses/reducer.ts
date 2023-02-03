import { createReducer } from '@reduxjs/toolkit';
import { setAllCoursesAction, clearAllCoursesAction } from './actionCreators';

import { ICourse } from 'Context';

const initialReducer: ICourse[] = [];

export const coursesReducer = createReducer(initialReducer, {
	[setAllCoursesAction.type]: (_state, action) => {
		return [...action.payload];
	},
	[clearAllCoursesAction.type]: () => {
		return initialReducer;
	},
});
