import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import UserPublishedTrips from './UserPublishedTrips'
import UpdateUser from './UpdateUser'
import UserBookedTrips from './UserBookedTrips'
import api from "../api"


class UserPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user:""
      };
  }

  componentWillMount() {
    api.getUserFromId(this.props.user.id)
        .then(res => {
            this.setState({user: res.data})
        })

  }

  render() {
    return (
      <div className="uk-container">
        <h2 className="uk-text-center">Hello {this.state.user.name}</h2>
        <div className="user-buttons uk-flex">
         <UpdateUser user={this.state.user}  />
          <NavLink to={'/home'} className="uk-button uk-button-primary uk-button-small  uk-margin-right">
            Search Trips
          </NavLink>

            <NavLink to={`/user-profile/${this.props.user.id}`} className="uk-button uk-button-primary uk-button-small uk-margin-right">
              see my reviews
            </NavLink>

        </div>

        <div
          className="user-panels uk-margin-large-top uk-child-width-1-2@m"
          data-uk-grid
        >
          <UserPublishedTrips user={this.props.user} />
          <UserBookedTrips user={this.props.user} />
        </div>
      </div>
    );
  }
}


export default UserPanel;