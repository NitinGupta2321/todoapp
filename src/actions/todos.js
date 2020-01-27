import {
    ADD_TODOS_BEGIN,
    ADD_TODOS_SUCCESS
} from './../constants/todos';

import { wait } from './../utill/utill';

export function addToDosBegin(){
    return {
        type: ADD_TODOS_BEGIN
    }
}

export function addToDosSuccess(todosData){
    return {
        type: ADD_TODOS_SUCCESS,
        todosData
    }
}

export function addToDos(todosData, callback) {
    return async dispatch => {
        try {
            dispatch(addToDosBegin());
            await wait(2000);
            callback();
            return dispatch(addToDosSuccess(todosData));
        }
        catch(error) {
            console.log(error);
        }
    };
}

export function deleteToDos(todosData) {
    return dispatch => dispatch(addToDosSuccess(todosData));
}