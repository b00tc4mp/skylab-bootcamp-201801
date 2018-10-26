import React, {Component} from 'react';
import api from "../api";
import BookedTripItem from './BookedTripItem'
import { withRouter } from "react-router-dom";


class UserBookedTrips extends Component {
    constructor(props) {
        super(props);
        this.state = {

            trips: []
        };
    }
    componentDidMount =() => {

        api
            .getUsernameId(this.props.match.params.username)
            .then(res=>res.data)
            .then(userId => {
                api
                    .listUserBookedTrips(userId)
                    .then(res => {
                        this.setState({ trips: res.data });

                    });
            })

    }

    render() {
        return <div className="user-trips published">
            <div className=" uk-card uk-card-default uk-card-body">
                <h3>Booked trips</h3>

                {this.state.trips.map((trip, index) => (
                    <BookedTripItem trip={trip} key={index} user={this.props.user} />
                ))}
            </div>
        </div>;
    }
}

export default withRouter(UserBookedTrips);