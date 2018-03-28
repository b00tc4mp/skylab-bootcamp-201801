import React, { Component } from 'react'
import {withRouter, NavLink} from "react-router-dom"
import api from '../api'
import CommentForm from './CommentForm'
import moment from 'moment'



//TODO replace icons by passengers image and link to public profile

//TODO add conditional component message : trip booked

//TODO make button rate and comment conditional



class TripInfo extends Component {
    constructor(props){
        super(props)

        this.state = {
            trip: '',
            creator: '',
            sameCreator:false

        }
    }

    componentDidMount(){
        api.getTripFromId(this.props.match.params.tripId)
            .then((res) => this.setState({trip: res.data}))
            .then(trip=>  api.getUserFromId(this.state.trip.creator)
                .then((res) => this.setState({creator: res.data}))
            )
            .then (() => this.state.trip.creator === this.props.user.id ? this.setState({sameCreator: true}) : '')

    }

    book = ()=> {
        api.joinTrip(this.state.trip._id, this.props.user.id)

            .then(res => {
                if(res.status === 'OK'){
                    this.setState({success: res.data})
                             api.getTripFromId(this.props.match.params.tripId)
                                 .then((res) => this.setState({trip: res.data}))
                } else {
                    this.setState({error: res.error})
                }
            })
            .catch(err => this.setState({error:err}))

    }

    render(){
        const trip = this.state.trip

        const date = moment(trip.departureDate).format('MMMM DD,  YYYY')
        const passengers = trip !== ''? trip.passengers: ''
        const passengersLength = passengers.length
        const seats = trip.seats - passengersLength
        const departureTime = moment(trip.departureDate).format('hh:mm')
        const returnTime = moment(trip.returnDate).format('hh:mm')
        const creator = this.state.creator

        return (

            <div className="uk-container">
               <div className="basic-info-data uk-h4 uk-margin-large-bottom">
                   From {trip.from}  to {trip.to} <br/>
                   Distance: {trip.distance}Km, Trip time: {trip.tripTime} hours <br/>
                   {date} <br/>
                   Departure at {departureTime} <br/>
                   Return at {returnTime} <br/>
               </div>
                {seats <=0 ? <h3 className="uk-alert-danger uk-text-center uk-padding-small">This trip is fully booked</h3> : ''}
                {this.state.sameCreator === true ? <h3 className="uk-alert-danger uk-text-center uk-padding-small">You cannot book a trip that you have created</h3> : ''}
                <div className="trip-panels" data-uk-grid>
                    <div className="uk-width-2-3@m">
                        <div className="uk-card uk-card-default uk-card-body">
                            <NavLink to={`/user-profile/${this.state.creator._id}`}>
                                {creator.picture === '' ?
                                    <img src="https://cdn0.iconfinder.com/data/icons/Hand_Drawn_Web_Icon_Set/128/user.png"
                                         alt=""
                                         className="user-image uk-display-block"/> : <img src={creator.picture}
                                                                                          className="uk-border-circle user-image uk-display-block"
                                                                                          alt=""/>}
                                {this.state.creator.name} {this.state.creator.surname}
                            </NavLink><br/>
                            meeting point: {trip.meetingPoint} <br/>

                            <p>{trip.description}</p>

                            {this.state.sameCreator === false ?<CommentForm user={this.props.user} trip={this.state.trip}/> : ''}



                        </div>
                    </div>
                    <div className="uk-width-1-3@m">
                        <div className="uk-card uk-card-default uk-card-body">Price: {trip.price} <br/>
                            {passengersLength} Passengers on this trip
                            <div className="passengers uk-flex"
                                 >
                                <span data-uk-icon="icon: user; ratio: 2"></span>
                                <span data-uk-icon="icon: user; ratio: 2"></span>
                                <span data-uk-icon="icon: user; ratio: 2"></span>
                                <span data-uk-icon="icon: user; ratio: 2"></span>
                            </div>
                            {seats} seats available
                            {seats >0 && this.state.sameCreator === false ?   <div className="book-button uk-flex uk-flex-center">
                                <button className="uk-button uk-button-primary uk-margin-small-top"
                                        onClick={() => this.book()}>
                                    Book!
                                </button>


                            </div>: ''}

                            {this.state.success? <h3 className="uk-alert-success uk-text-center uk-padding-small">{this.state.success}</h3>: ''}
                            {this.state.error? <h3 className="uk-alert-danger  uk-text-center uk-padding-small">{this.state.error}</h3>: ''}

                        </div>

                    </div>

                </div>

            </div>

        )
    }
}


export default withRouter(TripInfo);