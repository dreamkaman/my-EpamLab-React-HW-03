import { createAction } from '@reduxjs/toolkit';
import { GET_AUTHORS, SET_AUTHORS } from './actionTypes';

export const getAllAuthors = createAction(GET_AUTHORS);

export const setAllAuthors = createAction(SET_AUTHORS);
