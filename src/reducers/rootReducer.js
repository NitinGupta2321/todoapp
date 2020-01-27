import { combineReducers } from "redux";

import users from './users';
import todos from './todos';

// you can have multiple reducers, this is why you need to merge them into one
// reducer using `combinereducers` function.
const rootReducer = combineReducers({
    users,
    todos
});

export default rootReducer;