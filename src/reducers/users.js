/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import {
    ADD_USERS_BEGIN,
    ADD_USERS_SUCCESS
} from './../constants/users';

// The initial state of the App
export const initialState = {
    loading: false,
    usersData: {},
};

const users = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USERS_BEGIN:
            return {
                ...state,
                loading: true
            };

        case ADD_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                usersData: action.usersData
            };

        default:
            return state
    }
};

export default users;