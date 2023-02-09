import { createReducer } from '@reduxjs/toolkit';
import { IAuthor } from 'helpers/authorsString';
import { clearAllAuthorsAction, setAllAuthorsAction } from './actionCreators';

const initialState: IAuthor[] = [];
export const authorsReducer = createReducer(initialState, {
	[setAllAuthorsAction.type]: (_state, action) => {
		return [...action.payload];
	},
	[clearAllAuthorsAction.type]: () => {
		return [];
	},
});
