import React from 'react'
import {NavLink} from "react-router-dom"

const ViewTrip = (props) => {
    return (
        <NavLink className="uk-button uk-button-primary uk-button-small uk-margin-small-bottom" to={`/trip-info/${props.trip._id}`}>
            View Trip
        </NavLink>
    );
};

export default ViewTrip;
