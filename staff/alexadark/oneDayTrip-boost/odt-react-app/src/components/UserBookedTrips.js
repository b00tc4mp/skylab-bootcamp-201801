import React from 'react';
import BookedTripItem from './BookedTripItem'


const UserBookedTrips = () => (
    <div className="user-trips booked">
        <div className="uk-card uk-card-default uk-card-body">
            <h3>Booked trips</h3>
            <BookedTripItem/>
            <BookedTripItem/>
            <BookedTripItem/>

        </div>
    </div>
);

export default UserBookedTrips;