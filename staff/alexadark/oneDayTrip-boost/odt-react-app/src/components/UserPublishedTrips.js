import React from 'react';
import PublishedTripItem from './PublishedTripItem'


const UserPublishedTrips = () => (
    <div className="user-trips published">
        <div className=" uk-card uk-card-default uk-card-body">
            <h3>Published trips</h3>
            <PublishedTripItem/>
            <PublishedTripItem/>
            <PublishedTripItem/>

        </div>
    </div>
);

export default UserPublishedTrips;