import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import api from '../api'

class TripListItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            creator: ''
        }

    }

    componentDidMount(){
        api.getUserFromId(this.props.trip.creator)
            .then((creator) => this.setState({creator}))

    }


    render(){
        const date = this.props.trip.departureDate.slice(0,10)
        const passengers = this.props.trip.passengers.length
        return (
            <div className="trip-list-item uk-card uk-card-default uk-card-body uk-margin-bottom">
                <div className="uk-flex uk-flex-between">
                    <div className="icon-name uk-width-1-6@m">
                        <span data-uk-icon="icon: user; ratio: 2"></span>
                        {this.state.creator.name} {this.state.creator.surname}
                    </div>
                    <div className="date-place ">
                       <p>{date}</p>
                        <p>From {this.props.trip.from} - {this.props.trip.to}</p>
                    </div>
                    <div className="date-place ">
                        <p>Price:{this.props.trip.price}E</p>
                        <p>Available seats: {this.props.trip.seats - passengers}  </p>
                    </div>
                    <div className="">
                    <NavLink className="uk-button uk-button-primary " to={`/trip-info/${this.props.trip._id}`}>
                        View details and book
                    </NavLink>
                    </div>


                </div>

            </div>

        )
    }
}

export default TripListItem;