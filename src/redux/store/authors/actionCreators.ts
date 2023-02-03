import { createAction } from '@reduxjs/toolkit';
import { GET_AUTHORS, SET_AUTHORS } from './actionTypes';

export const getAllAuthorsAction = createAction(GET_AUTHORS);

export const setAllAuthorsAction = createAction(SET_AUTHORS);
