import {
    ADD_USERS_BEGIN,
    ADD_USERS_SUCCESS
} from './../constants/users';

import { wait } from './../utill/utill';

export function addUsersBegin(){
    return {
        type: ADD_USERS_BEGIN
    }
}

export function addUsersSuccess(usersData){
    return {
        type: ADD_USERS_SUCCESS,
        usersData
    }
}

export function addUsers(usersData, callback) {
    return async dispatch => {
        try {
            dispatch(addUsersBegin());
            await wait(2000);
            callback();
            return dispatch(addUsersSuccess(usersData));
        }
        catch(error) {
            console.log(error);
        }
    };
}

export function deleteUsers(usersData) {
    return dispatch => dispatch(addUsersSuccess(usersData));
}