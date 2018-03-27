import React, { Component } from 'react';
import api from '../api'
import TripListItem  from './TripListItem'


class TripList extends Component {
constructor(props) {
    super(props);
    this.state = {
        trips: []
    }
}
componentDidMount(){
    if(!this.props.trips) {
        const {match: {params: {location, arrival, departure}}} = this.props //getting the parameters for listTrips from the url
        api.listTrips(location, arrival, departure)
            .then(res => {
                this.setState({trips: res.data});
            })
    }
}

    render() {
    const trips = this.props.trips ? this.props.trips : this.state.trips
        return <div className="trip-list uk-container">
            {trips.map((trip, index) => <TripListItem trip={trip} key={index}/>)}
          </div>;
    }
}

export default TripList;