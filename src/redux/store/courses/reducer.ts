import { createReducer } from '@reduxjs/toolkit';
import { setAllCoursesAction } from './actionCreators';

import { ICourse } from 'Context';

const initialReducer: ICourse[] = [];

export const coursesReducer = createReducer(initialReducer, {
	[setAllCoursesAction.type]: (_state, action) => {
		return [...action.payload];
	},
});
