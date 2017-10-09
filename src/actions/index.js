// action is an object
// action creator is a function which returns an object/action
// befor creating action creator we set constatns file

import {ADD_REMINDER, REMOVE_REMINDER, REMOVE_ALL} from '../constans.js';

export const actionCreatorAddReminder = (text, dueDate) => {
    // acrion /object:
    const action = {
        type: ADD_REMINDER,
        text,
        dueDate
    }
    return action;
}

export const actionCreatorRemoveReminder = (id) =>{
    const action = {
        type: REMOVE_REMINDER,
        id
    }
    console.log("deleting action: ", action);
    return action;
}

export const actionCreatorRemoveAll = ()=>{
    const action = {
        type: REMOVE_ALL
    }
    return action;
}


