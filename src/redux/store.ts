import { configureStore } from 'redux';

// import {createStore} from 'react-redux';

// const composeEnhancers =
// 	typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
// 		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
// 				// Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
// 		  })
// 		: compose;

export const store = configureStore({
	reducer: {},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
