import { combineReducers } from 'redux';

const test = (state = {}, action) => {
	console.log(action);
	return state;
};

const reducer = combineReducers({
	test,
});

export default reducer;
