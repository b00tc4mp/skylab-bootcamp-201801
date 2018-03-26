import React, {Component} from 'react';
import api from "../api";
import PublishedTripItem from './PublishedTripItem'
import {withRouter} from "react-router-dom";


class UserPublishedTrips extends Component {
    constructor(props) {
        super(props);
        this.state = {

            trips: []
        };
    }

    componentDidMount = () => {

        api
            .getUsernameId(this.props.match.params.username)
            .then(res => res.data)
            .then(creatorId => {
                api
                    .listUserPublishedTrips(creatorId)
                    .then(res => {
                        this.setState({trips: res.data});

                    })
            })
        //  api
        //      .listUserPublishedTrips(this.props.user._id)
        //      .then(trips => {
        //          this.setState({ trips });
        //
        //      })


    }

    render() {
        return <div className="user-trips published">
            <div className=" uk-card uk-card-default uk-card-body">
                <h3>Published trips</h3>

                {this.state.trips.map((trip, index) => (
                    <PublishedTripItem trip={trip}
                                       key={index}
                    />
                ))}
            </div>
        </div>;
    }
}

export default withRouter(UserPublishedTrips);