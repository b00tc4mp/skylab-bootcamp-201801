import React, {Component} from 'react';
import api from '../api'
import {withRouter} from "react-router-dom"
import moment from 'moment'

class UpdateTrip extends Component {
    constructor(props) {
        super(props)
        this.state = {
            from: '',
            to: '',
            date: '',
            meetingPoint: '',
            departureTime: '',
            returnTime: '',
            tripTime: '',
            price: '',
            distance: '',
            seats: '',
            description: '',
            password: ''
        }
    }

    componentWillMount() {
        const trip = this.props.trip
        console.log(trip)

        this.setState({
            from: trip.from,
            to: trip.to,
            date: moment(trip.departureDate).format('YYYY-MM-DD'),
            meetingPoint: trip.meetingPoint,
            departureTime: moment(trip.departureDate).format('hh:mm'),
            returnTime: moment(trip.returnDate).format('hh:mm'),
            tripTime: trip.tripTime,
            price: trip.price,
            distance: trip.distance,
            seats: trip.seats,
            description: trip.description,

        })
    }



    updateTrip = e => {
        e.preventDefault()
        const {from, to, date, meetingPoint, departureTime, returnTime, tripTime, price, distance, seats, description, password} = this.state

        this.props.onUpdateTrip(this.props.trip.creator, this.props.trip._id, from, to, date, meetingPoint, departureTime, returnTime, tripTime, price, distance, seats, description, password, (error, res) => {

            if (error) {
                this.setState({ error})
            } else if (res) {
                if (res.status === 'OK') {
                    this.setState({closeModal: true})
                    this.setState({
                        success: res.data,
                        from: '',
                        to: '',
                        date: '',
                        departureTime: '',
                        returnTime: '',
                        tripTime: '',
                        price: '',
                        distance: '',
                        seats: '',
                        meetingPoint: '',
                        description: ''
                    })
                } else {
                    this.setState({error: res.error})
                }    
            }
        })

    }


    keepFrom = from => this.setState({from})
    keepTo = to => this.setState({to})
    keepDate = date => this.setState({date})
    keepMeeting = meetingPoint => this.setState({meetingPoint})
    keepDeparture = departureTime => this.setState({departureTime})
    keepReturn = returnTime => this.setState({returnTime})
    keepTripTime = tripTime => this.setState({tripTime})
    keepPrice = price => this.setState({price})
    keepDistance = distance => this.setState({distance})
    keepSeats = seats => this.setState({seats})
    keepDescription = description => this.setState({description})
    keepPassword = password => this.setState({password})


    render() {
        return (
            <div className="uk-display-inline">
                <button className="uk-button uk-button-small uk-button-primary uk-margin-small-bottom"
                        data-uk-toggle="target: #updateTrip">
                    Update Trip
                </button>


                <div id="updateTrip"
                     data-uk-modal
                     className={this.state.closeModal ? "closeModal" : ''}>
                    <div className="uk-modal-dialog uk-modal-body uk-width-xxlarge">

                        <h2 className="uk-text-center">Update Trip</h2>
                        <form data-uk-grid
                              onSubmit={this.updateTrip}>
                            <div className="uk-width-1-3@m">
                                <input type="text"
                                       className="uk-input"
                                       placeholder="From"
                                       required="true"
                                       onChange={e => this.keepFrom(e.target.value.toLowerCase())}
                                       value={this.state.from}/>
                            </div>
                            <div className="uk-width-1-3@m">
                                <input type="text"
                                       className="uk-input"
                                       placeholder="To"
                                       required="true"
                                       onChange={e => this.keepTo(e.target.value)}
                                       value={this.state.to}/>
                            </div>
                            <div className="uk-width-1-3@m">
                                <input type="date"
                                       className="uk-input"
                                       placeholder="Date"
                                       required="true"
                                       onChange={e => this.keepDate(e.target.value)}
                                       value={this.state.date}/>
                            </div>
                            <div className="uk-width-1-3@m">
                                <input type="time"
                                       className="uk-input"
                                       placeholder="Departure time"
                                       required="true"
                                       onChange={e => this.keepDeparture(e.target.value)}
                                       value={this.state.departureTime}/>
                            </div>
                            <div className="uk-width-1-3@m">
                                <input type="time"
                                       className="uk-input"
                                       placeholder="Return Time"
                                       required="true"
                                       onChange={e => this.keepReturn(e.target.value)}
                                       value={this.state.returnTime}/>
                            </div>
                            <div className="uk-width-1-3@m">
                                <input type="text"
                                       className="uk-input"
                                       placeholder="Distance"
                                       required="true"
                                       onChange={e => this.keepDistance(e.target.value)}
                                       value={this.state.distance}/>
                            </div>
                            <div className="uk-width-1-3@m">
                                <input type="text"
                                       className="uk-input"
                                       placeholder="Trip time"
                                       required="true"
                                       onChange={e => this.keepTripTime(e.target.value)}
                                       value={this.state.tripTime}/>
                            </div>
                            <div className="uk-width-1-3@m">
                                <input type="text"
                                       className="uk-input"
                                       placeholder="Price"
                                       required="true"
                                       onChange={e => this.keepPrice(e.target.value)}
                                       value={this.state.price}/>
                            </div>
                            <div className="uk-width-1-3@m">
                                <input type="text"
                                       className="uk-input"
                                       placeholder="Available seats"
                                       required="true"
                                       onChange={e => this.keepSeats(e.target.value)}
                                       value={this.state.seats}/>
                            </div>
                            <div className="uk-width-1-1@m">
                                <input type="text"
                                       className="uk-input"
                                       placeholder="Meeting Point"
                                       required="true"
                                       onChange={e => this.keepMeeting(e.target.value)}
                                       value={this.state.meetingPoint}/>
                            </div>
                            <div className="uk-width-1-1">
                        <textarea rows="5"
                                  className="uk-textarea"
                                  placeholder="Description"
                                  required="true"
                                  onChange={e => this.keepDescription(e.target.value)}
                                  value={this.state.description}/>
                            </div>
                            <div className="uk-width-1-1">
                                <input type="password"
                                       className="uk-input"
                                       placeholder="Password"
                                       required="true"
                                       onChange={e => this.keepPassword(e.target.value)}
                                       value={this.state.password}/>
                            </div>
                            <div>
                                <input type="submit"
                                       className="uk-button uk-button-primary"
                                       value="Update Trip"/>
                            </div>

                        </form>
                        {this.state.error ?
                            <h3 className="uk-text-center uk-alert-danger uk-padding-small">{this.state.error}</h3> : ''}
                    </div>
                </div>
            </div>

        )
    }
}


export default withRouter(UpdateTrip);