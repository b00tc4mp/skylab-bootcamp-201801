import React, { Component } from 'react';
import api from '../api'
import TripListItem from './TripListItem'


class TripList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trips: []
        }
    }
    componentDidMount() {
        const { match: { params: { location, arrival, departure } } } = this.props //getting the parameters for listTrips from the url

        this.list(location, arrival, departure)
    }

    componentWillReceiveProps(props) {
        const { match: { params: { location, arrival, departure } } } = props //getting the parameters for listTrips from the url

        this.list(location, arrival, departure)
    }

    list(location, arrival, departure) {
        api.listTrips(location, arrival, departure)
            .then(res => {
                this.setState({ trips: res.data || [] });
            })
    }

    render() {
        const trips = this.state.trips
        return <div className="trip-list uk-container">
            {trips.map((trip, index) => <TripListItem trip={trip} key={index} />)}
        </div>;
    }
}

export default TripList;