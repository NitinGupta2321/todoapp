import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import users from './users';
import todos from './todos';

const todosPersistConfig = {
    key: 'todos',
    storage: storage,
    blacklist: ['loading']
};

const usersPersistConfig = {
    key: 'users',
    storage: storage,
    blacklist: ['loading']
};

// you can have multiple reducers, this is why you need to merge them into one
// reducer using `combinereducers` function.
const rootReducer = combineReducers({
    users: persistReducer(usersPersistConfig, users),
    todos: persistReducer(todosPersistConfig, todos)
});

export default rootReducer;