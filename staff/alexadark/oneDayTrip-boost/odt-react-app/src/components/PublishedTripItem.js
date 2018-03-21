import React, { Component } from 'react'
import UpdateTrip from './UpdateTrip'
import CancelTrip from './CancelTrip'


class PublishedTripItem extends Component {
    constructor(props){
        super(props)
    }
   

    render(){
         const seats = this.props.trip.seats-this.props.trip.passengers.length
        
        return <div className="uk-container">
            <div className={`uk-card ${seats > 0 ? "uk-card-secondary " : "uk-card-primary"} uk-card-body uk-margin-bottom`}>
              <div className="uk-flex uk-flex-between">
                <div className="from-to">
                  From {this.props.trip.from} To {this.props.trip.to}
                  <br />
                  On the {this.props.trip.departureDate.slice(0, 10)}
                  <br />
                  {seats > 0 ? `${seats} seats available` : "fully booked"}
                </div>
                <div className="buttons">
                 <UpdateTrip trip={this.props.trip}/>
                  <br />
                  <button className="uk-button uk-button-small uk-margin-small-bottom uk-button-primary ">
                    View Trip
                  </button>
                  <br />
                  <CancelTrip/>
                  <br />
                </div>
              </div>
            </div>
          </div>;
    }
}


export default PublishedTripItem;