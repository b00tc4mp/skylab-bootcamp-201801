import React, { Component } from 'react';
import api from "../api";
import PublishedTripItem from './PublishedTripItem'
import { withRouter } from "react-router-dom";


class UserPublishedTrips extends Component {
    constructor(props) {
        super(props);
        this.state = {

            trips: []
        };
    }

    componentDidMount = () => {
        this.listTrips(this.props.match.params.username)
    }

    listTrips(username) {
        api
            .getUsernameId(username)
            .then(res => res.data)
            .then(creatorId => {
                api
                    .listUserPublishedTrips(creatorId)
                    .then(res => {
                        this.setState({ trips: res.data });

                    })
            })
    }

    cancelTrip = (creator, tripId, password, callback) => {
        console.log('cancel trip with password ', creator, tripId, password)

        api.cancelTrip(creator, tripId, password)
            .then(res => {
                callback(undefined, res)

                return this.listTrips(this.props.match.params.username)
            })
            .catch(callback)
    }

    render() {
        return <div className="user-trips published">
            <div className=" uk-card uk-card-default uk-card-body">
                <h3>Published trips</h3>

                {this.state.trips.map((trip, index) => (
                    <PublishedTripItem trip={trip}
                        key={index}
                        user={this.props.user}
                        onUpdateTrip={this.listTrips}
                        onCancelTrip={this.cancelTrip}
                    />
                ))}
            </div>
        </div>;
    }
}

export default withRouter(UserPublishedTrips);