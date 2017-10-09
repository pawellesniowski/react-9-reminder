// APP.JS: //

import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreatorAddReminder, actionCreatorRemoveReminder } from '../actions';


import '../styles/css.css';


class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
    }

    addReminder(){
        if(this.state.text !== ''){
            this.props.actionCreatorAddReminder(this.state.text); // 'activating' actions...
            this.setState({
                text: ''
            });
        }
    }

    displayRminders(){
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
                    {this.displayRminders()}
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
