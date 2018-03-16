import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class BookedTripItem extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="uk-container">
                <div className="uk-card uk-card-secondary uk-card-body uk-margin-bottom">
                    <h3>Booked Trip </h3>
                </div>

            </div>

        )
    }
}


export default BookedTripItem;