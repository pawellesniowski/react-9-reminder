// creating reducers:

import {ADD_REMINDER} from '../constans.js';
import {REMOVE_REMINDER} from '../constans.js';

import { bake_cookie, read_cookie } from 'sfcookies'

const reminder = (action)=>{
    const { text, dueDate } = action;
    let reminder = {
        text,
        dueDate,
        id: new Date().getTime()
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
    state = read_cookie('reminders');

    switch(action.type){
        case ADD_REMINDER:
            reminders = [...state, reminder(action)];
            bake_cookie('reminders', reminders);
            return reminders;
        case REMOVE_REMINDER:
            reminders = removeById(state, action);
            bake_cookie('reminders', reminders);
            return reminders;
        default: 
            return state;
    }    
}

export default reminders;