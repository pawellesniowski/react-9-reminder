// action is an object
// action creator is a function which returns an object/action
// befor creating action creator we set constatns file

import {ADD_REMINDER} from '../constans.js';

export const actionCreatorAddReminder = (text) => {
    // acrion /object:
    const action = {
        type: ADD_REMINDER,
        text
    }
    console.log('action from actions: ', action);
    return action;
}
