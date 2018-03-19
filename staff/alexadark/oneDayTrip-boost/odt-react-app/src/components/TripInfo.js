import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import api from '../api'


//TODO pass name of creator



class TripInfo extends Component {
    constructor(props){
        super(props)

        this.state = {
            trip: ''
        }
    }

    componentDidMount(){
        api.getTripFromId(this.props.match.params.tripId)
            .then((trip) => this.setState({trip}))



    }

    render(){
        const trip = this.state.trip

        const date = trip !==''? trip.departureDate.slice(0,10) : ''
        const passengers = trip !==''? trip.passengers.length : ''
        const seats = trip !==''? trip.seats - passengers : ''
        return (

            <div className="uk-container">
               <div className="basic-info-data uk-h4 uk-margin-large-bottom">
                   From {trip.from}  to {trip.to} <br/>
                   Distance: {trip.distance}Km, Trip time: {trip.tripTime} hours <br/>
                   {date}
               </div>
                <div className="trip-panels" data-uk-grid>
                    <div className="uk-width-2-3@m">
                        <div className="uk-card uk-card-default uk-card-body">
                            <span data-uk-icon="icon: user; ratio: 2"></span>
                            name <br/>
                            meeting point: {trip.meetingPoint} <br/>

                            <p>{trip.description}</p>
                        </div>
                    </div>
                    <div className="uk-width-1-3@m">
                        <div className="uk-card uk-card-default uk-card-body">Price: {trip.price} <br/>
                            {passengers} Passengers on this trip
                            <div className="passengers uk-flex"
                                 >
                                <span data-uk-icon="icon: user; ratio: 2"></span>
                                <span data-uk-icon="icon: user; ratio: 2"></span>
                                <span data-uk-icon="icon: user; ratio: 2"></span>
                                <span data-uk-icon="icon: user; ratio: 2"></span>
                            </div>
                            {seats} seats available
                            <div className="book-button uk-flex uk-flex-center">
                                <button className="uk-button uk-button-primary">
                                    Book!
                                </button>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        )
    }
}


export default TripInfo;