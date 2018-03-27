import React, { Component } from 'react'
import api from  '../api'
import ViewTrip from './ViewTrip'


class BookedTripItem extends Component {
    constructor(props){
        super(props)
        this.state ={
            unJoin: false
        }
    }

    unjoinTrip = ()=>{
       return api.unjoinTrip(this.props.trip._id,this.props.user.id)
           .then(() => this.setState({unJoin:true}) )


    }



    render(){


        return <div className="uk-container">
            <div className={`uk-card  uk-card-secondary uk-card-body uk-margin-bottom`}>
                <div className="uk-flex uk-flex-between">
                    <div className="from-to">
                        From {this.props.trip.from} To {this.props.trip.to}
                        <br />
                        On the {this.props.trip.departureDate.slice(0, 10)}
                        <br />
                    </div>
                    <div className="buttons">
                        <ViewTrip trip={this.props.trip} user={this.props.user} />
                        <br />

                        <button className="uk-button uk-button-small uk-margin-small-bottom uk-button-primary "
                        onClick={()=>this.unjoinTrip()}>
                            Unjoin Trip
                        </button>
                        <br />
                    </div>
                </div>
                {this.state.unJoin? <h4 className="uk-text-danger uk-text-center">You have unjoined this trip</h4> :''}
            </div>
        </div>;
    }
}


export default BookedTripItem