import React from 'react';
import api from '../api'
import TripListItem from './TripListItem'
import { Route } from 'react-router-dom'

const { Component } = React

class TripList extends Component {
    constructor() {
        super()

        this.state = {
            trips: []
        }
    }

    componentDidMount() {
        const { match: { params: { location } } } = this.props

        api.listTrips(location)
            .then((trips) => {
                this.setState({ trips })
            })
    }

    render() {
        return <div className="uk-container uk-padding">
            <h2 className="uk-text-center">This week in your area</h2>

            <div className="trip-list" >
                {this.state.trips.map((trip, index) => <TripListItem trip={trip} key={index} />)}
            </div>
        </div>
    }
}

export default TripList;