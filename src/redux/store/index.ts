import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// import { applyMiddleware } from '@reduxjs/toolkit';
// import createSagaMiddleware from '@redux-saga/core';

import { userReducer } from './user/reducer';

const rootReducer = combineReducers({
	user: userReducer,
});

console.log(rootReducer);

// const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
	reducer: rootReducer,
	// applyMiddleWare(sagaMiddleware(rootSaga)),
	devTools: process.env.NODE_ENV === 'development',
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
