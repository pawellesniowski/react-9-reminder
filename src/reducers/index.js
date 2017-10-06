// creating reducers:

import {ADD_REMINDER} from '../constans.js';

//reducer takes STATE , change it and returns NEW STATE OBJECT
// reducers specify how the state was changed


const reminder = (action)=>{
    let reminder = {
        text: action.text,
        id: Math.random()
    }
    return reminder;
}

const reminders = (state=[], action)=>{
    let reminders = null;

    switch(action.type){
        case ADD_REMINDER:
            reminders = [...state, reminder(action)];
            console.log('reducers.js , reminders: ', reminders);
            return reminders;
        default: 
            return state;
    }    
}

export default reminders;