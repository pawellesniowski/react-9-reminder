import React, { Component } from 'react';

class App extends Component {


    render(){
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
                            />
                            <div className="input-group-btn"> {/*this ensures proper alignment of button */}
                                <button className="btn btn-secondary" type="button">Add!</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    } // end of render
} // edn of component

export default App;