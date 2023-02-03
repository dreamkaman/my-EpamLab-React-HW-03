import { createReducer } from '@reduxjs/toolkit';
import { IAuthor } from 'helpers/authorsString';
import { setAllAuthors } from './actionCreators';

const initialState: IAuthor[] = [];
export const authorsReducer = createReducer(initialState, {
	[setAllAuthors.type]: (_state, action) => {
		[...action.payload];
	},
});
