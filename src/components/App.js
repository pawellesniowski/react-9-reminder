import React, { Component } from 'react';

// hooking up mapDispatchToProps to our component actionCreatorAddReminder, it requires importing connect func. and actionCreatorAddReminder itself
import { connect } from 'react-redux';
import { actionCreatorAddReminder } from '../actions';
import { bindActionCreators } from 'redux';


class App extends Component {

        constructor(state){ 
            super(state);
            this.state = { 
                text: ''
            }
        }

    addReminder(){
        this.props.actionCreatorAddReminder(this.state.text);
    }

    render(){
        console.log("props in render method: ", this.props);
        return( 
            <div className="app container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="app-title">
                            <h1>Reminder</h1>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4">
                            <div className="input-group">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Remind me of..."
                                    aria-label="type reminder"
                                    onChange={event=>this.setState({text:event.target.value})} 
                                />
                                <div className="input-group-btn"> {/*this ensures proper alignment of button */}
                                    <button className="btn btn-secondary" type="button" onClick={()=>this.addReminder()}>Add!</button> {/*2*/}
                                </div>
                            </div>
                    </div>
                </div>

            </div>
        );
    } // end of render
} // edn of component


function mapDispatchToProps(dispatch){
   // binde action creator to this application, import above bindActionCreator from redux
    return bindActionCreators({actionCreatorAddReminder}, dispatch);
} 



function mapStateToProps(state){
    return {
        reminders: state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

