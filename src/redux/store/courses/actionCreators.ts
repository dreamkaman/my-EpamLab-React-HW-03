import { createAction } from '@reduxjs/toolkit';
import { GET_COURSES, SET_COURSES } from './actionTypes';

export const getAllCoursesAction = createAction(GET_COURSES);

export const setAllCoursesAction = createAction(SET_COURSES);
