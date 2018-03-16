import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class TripListItem extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="trip-list-item uk-card uk-card-default uk-card-body uk-margin-bottom">
                <div className="uk-flex uk-flex-between">
                    <div className="icon-name uk-width-1-6@m">
                        <span data-uk-icon="icon: user; ratio: 2"></span>
                        name
                    </div>
                    <div className="date-place ">
                       <p>Date</p>
                        <p>From - to</p>
                    </div>
                    <div className="date-place ">
                        <p>Price</p>
                        <p>Available seats</p>
                    </div>
                    <div className="">
                    <NavLink className="uk-button uk-button-primary " to="/trip-info">
                        View details and book
                    </NavLink>
                    </div>


                </div>

            </div>

        )
    }
}

export default TripListItem;