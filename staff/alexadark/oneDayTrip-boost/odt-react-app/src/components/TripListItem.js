import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import api from '../api'
import moment from 'moment'

class TripListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            creator: ''
        }

    }

    componentDidMount() {
        const creatorId = this.props.trip.creator

        this.getUser(creatorId)
    }

    componentWillReceiveProps(props) {
        const creatorId = props.trip.creator

        this.getUser(creatorId)
    }

    getUser(id) {
        api.getUserFromId(id)
            .then((res) => this.setState({ creator: res.data }))
    }

    render() {
        const trip = this.props.trip
        const passengers = this.props.trip.passengers.length
        const creator = this.state.creator
        return (
            <div className="trip-list-item uk-card uk-card-default uk-card-body uk-margin-bottom">
                <div className="uk-flex uk-flex-between">
                    <div className="icon-name uk-width-1-6@m">
                        <NavLink to={`/user-profile/${creator._id}`}>
                            {creator.picture === '' ?
                                <img src="https://cdn0.iconfinder.com/data/icons/Hand_Drawn_Web_Icon_Set/128/user.png"
                                    alt=""
                                    className="user-image uk-display-block" /> : <img src={creator.picture}
                                        className="uk-border-circle user-image uk-display-block"
                                        alt="" />}
                            <div className="creator">{creator.name} {creator.surname}</div>
                        </NavLink>
                    </div>
                    <div className="date-place ">
                        <p>{moment(trip.departureDate).format('MMMM DD,  YYYY')}</p>
                        <p>From {trip.from} - {trip.to}</p>
                    </div>
                    <div className="date-place ">
                        <p>Price:{trip.price}E</p>
                        <p>Available seats: {trip.seats - passengers}  </p>
                    </div>
                    <div className="">
                        <NavLink className="uk-button uk-button-primary "
                            to={`/trip-info/${trip._id}`}>
                            View details and book
                        </NavLink>
                    </div>


                </div>

            </div>

        )
    }
}

export default TripListItem;