import { createAction } from '@reduxjs/toolkit';
import {
	GET_COURSES,
	SET_COURSES,
	CLEAR_COURSES,
	ADD_COURSE,
	DELETE_COURSE,
} from './actionTypes';

export const getAllCoursesAction = createAction(GET_COURSES);
export const setAllCoursesAction = createAction(SET_COURSES);
export const clearAllCoursesAction = createAction(CLEAR_COURSES);
export const addNewCourseAction = createAction(ADD_COURSE);
export const deleteCourseAction = createAction(DELETE_COURSE);
