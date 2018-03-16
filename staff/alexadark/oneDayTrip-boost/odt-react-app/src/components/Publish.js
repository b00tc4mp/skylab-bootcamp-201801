import React, { Component } from 'react';

class Publish extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="uk-container">
                <h2 className="uk-text-center">Publish your Trip</h2>
                <form  data-uk-grid>
                    <div className="uk-width-1-2@m">
                        <input type="text"
                               className="uk-input" placeholder="From"/>
                    </div>
                    <div className="uk-width-1-2@m">
                        <input type="text"
                               className="uk-input" placeholder="To"/>
                    </div>
                    <div className="uk-width-1-3@m">
                        <input type="text"
                               className="uk-input" placeholder="Date"/>
                    </div>
                    <div className="uk-width-1-3@m">
                        <input type="text"
                               className="uk-input" placeholder="Departure time"/>
                    </div>
                    <div className="uk-width-1-3@m">
                        <input type="text"
                               className="uk-input" placeholder="Return Time"/>
                    </div>
                    <div className="uk-width-1-3@m">
                        <input type="text"
                               className="uk-input" placeholder="Duration"/>
                    </div>
                    <div className="uk-width-1-3@m">
                        <input type="text"
                               className="uk-input" placeholder="Price"/>
                    </div>
                    <div className="uk-width-1-3@m">
                        <input type="text"
                               className="uk-input" placeholder="Available seats"/>
                    </div>
                    <div className="uk-width-1-1">
                        <input type="textarea"
                               className="uk-input" placeholder="Descriptions"/>
                    </div>
                    <div>
                        <input type="text"
                               className="uk-button uk-button-primary" value="Submit Trip"/>
                    </div>

                </form>
            </div>

        )
    }
}


export default Publish;