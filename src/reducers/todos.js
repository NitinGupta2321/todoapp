/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import {
    ADD_TODOS_BEGIN,
    ADD_TODOS_SUCCESS
} from './../constants/todos';

// The initial state of the App
export const initialState = {
    loading: false,
    todosData: {},
};

const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODOS_BEGIN:
            return {
                ...state,
                loading: true
            };

        case ADD_TODOS_SUCCESS:
            return {
                ...state,
                loading: false,
                todosData: action.todosData
            };

        default:
            return state
    }
};

export default todos;