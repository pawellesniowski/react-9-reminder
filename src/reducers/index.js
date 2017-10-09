// creating reducers:

import {ADD_REMINDER} from '../constans.js';
import {REMOVE_REMINDER} from '../constans.js';

//reducer takes STATE , change it and returns NEW STATE OBJECT
// reducers specify how the state was changed


const reminder = (action)=>{
    let reminder = {
        text: action.text,
        id: Math.random()
    }
    return reminder;
}

const removeById = (state=[], action)=>{
    const reminders = state.filter(reminder=>{
        return reminder.id !== action.id;
    })
    return reminders;
}

const reminders = (state=[], action)=>{
    let reminders = null;

    switch(action.type){
        case ADD_REMINDER:
            reminders = [...state, reminder(action)];
            return reminders;
        case REMOVE_REMINDER:
            reminders = removeById(state, action);
            return reminders;
        default: 
            return state;
    }    
}

export default reminders;