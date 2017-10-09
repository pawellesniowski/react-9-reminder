// APP.JS: //

import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreatorAddReminder, actionCreatorRemoveReminder, actionCreatorRemoveAll } from '../actions';

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
                                
                            <h4>
                                <i  
                                    onClick={()=>this.deleteReminder(reminder.id)}
                                    className="close-x fa fa-times" aria-hidden="true">
                                </i> 
                                {reminder.text}
                            </h4>
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

    removeAll(){
        this.props.actionCreatorRemoveAll();
    }

    render(){
        return(
            <div className="App container">
                <div className="app-title"><h1>Reminder</h1></div>

                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        <form>
                                <input 
                                    onChange={event=>this.setState({text: event.target.value})}
                                    value={this.state.text}
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Remember of..." 
                                />

                                <input 
                                    className="form-control"
                                    type="datetime-local"
                                    onChange={event=>this.setState({dueDate: event.target.value})}
                                    value={this.state.dueDate}
                                />
                                
                                
                                <button 
                                    onClick={()=>{this.addReminder()}}
                                    className="btn btn-success" 
                                    type="button"
                                >
                                    Add Reminder
                                </button>

                        </form>
                    </div>
                </div> {/*end of input - button row*/}

                <div className="app-output">
                    {this.displayReminders()}
                </div>

                <div>
                    <button 
                        onClick={()=>this.removeAll()}
                        className="btn btn-danger">Remove All</button>
                </div>
              

            </div>
        );
    }
}

// actions functions to state:
function mapDispatchToProps(dispatch){
    return bindActionCreators({actionCreatorAddReminder, actionCreatorRemoveReminder, actionCreatorRemoveAll}, dispatch)
}

// define mapStateToProps so we can recognise redux state to this component
function mapStateToProps(state){
    return {
        reminders: state
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(App);
