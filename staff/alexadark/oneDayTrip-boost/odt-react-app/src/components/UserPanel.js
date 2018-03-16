import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import UserPublishedTrips from './UserPublishedTrips'
import UserBookedTrips from './UserBookedTrips'

class UserPanel extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="uk-container">
                <h2 className="uk-text-center">Hello User name</h2>
                <div className="user-buttons uk-flex">
                    <NavLink to="/sign-up" ><button className="uk-button uk-button-primary uk-button-small uk-margin-right">Edit Profile</button></NavLink>
                    <button className="uk-button uk-button-primary uk-button-small  uk-margin-right">Delete Profile</button>
                    <button className="uk-button uk-button-primary uk-button-small  uk-margin-right">change password</button>
                    <NavLink to="/user-profile" ><button className="uk-button uk-button-primary uk-button-small uk-margin-right">see my reviews</button></NavLink>
                </div>

                <div className="user-panels uk-margin-large-top uk-child-width-1-2@m" data-uk-grid >
                    <UserPublishedTrips/>
                    <UserBookedTrips/>

                </div>

            </div>

        )
    }
}


export default UserPanel;