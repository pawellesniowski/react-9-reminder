// APP.JS: //

import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreatorAddReminder, actionCreatorRemoveReminder } from '../actions';

import  moment from 'moment';

import '../styles/css.css';


class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            text: '',
            dueDate: ''
        }

    }

    addReminder(){
        console.log(this.state);
        if(this.state.text !== ''){
            this.props.actionCreatorAddReminder(this.state.text, this.state.dueDate); // 'activating' actions...
            this.setState({
                text: '',
                dueDate: ''
            });
        }
    }

    displayReminders(){
        const { reminders } = this.props;
        return(
            <ul>
                {reminders.map(reminder=>{
                    return (
                        <li className="list_item" key={reminder.id}>
                                
                            <h3>
                                <i  
                                    onClick={()=>this.deleteReminder(reminder.id)}
                                    className="close-x fa fa-times" aria-hidden="true">
                                </i> 
                                {reminder.text}
                            </h3>
                            <p>
                                <em>
                                    {moment(new Date(reminder.dueDate)).format('LL')}, ({moment(new Date(reminder.dueDate)).fromNow()})
                                </em>
                            </p>                            

                        </li>
                    );
                })}
            </ul>
        );
    }

    deleteReminder(id){
        console.log(id);
        this.props.actionCreatorRemoveReminder(id);
    }

    render(){
        return(
            <div className="App container">
                <div className="app-title"><h1>Reminder</h1></div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="input-group">
                            
                            <input 
                                onChange={event=>this.setState({text: event.target.value})}
                                value={this.state.text}
                                type="text" 
                                className="form-control" 
                                placeholder="Remember of..." 
                                aria-label="New reminder..." 
                            />

                            <input 
                                className="form-control"
                                type="datetime-local"
                                onChange={event=>this.setState({dueDate: event.target.value})}
                                value={this.state.dueDate}
                            />
                            
                            <span className="input-group-btn">
                                <button 
                                    onClick={()=>{this.addReminder()}}
                                    className="btn btn-secondary" 
                                    type="button"
                                >
                                    Add
                                </button>
                            </span>

                        </div>
                    </div>
                </div> {/*end of input - button row*/}

                <div className="app-output">
                    {this.displayReminders()}
                </div>
              

            </div>
        );
    }
}

// actions functions to state:
function mapDispatchToProps(dispatch){
    return bindActionCreators({actionCreatorAddReminder, actionCreatorRemoveReminder}, dispatch)
}

// define mapStateToProps so we can recognise redux state to this component
function mapStateToProps(state){
    return {
        reminders: state
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(App);
