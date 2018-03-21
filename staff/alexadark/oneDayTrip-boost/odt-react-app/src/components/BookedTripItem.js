import React, { Component } from 'react';


class BookedTripItem extends Component {
    constructor(props){
        super(props)
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
                        <button className="uk-button uk-button-small uk-button-primary uk-margin-small-bottom">
                            View Trip
                        </button>
                        <br />

                        <button className="uk-button uk-button-small uk-margin-small-bottom uk-button-primary ">
                            Unjoin Trip
                        </button>
                        <br />
                    </div>
                </div>
            </div>
        </div>;
    }
}


export default BookedTripItem;