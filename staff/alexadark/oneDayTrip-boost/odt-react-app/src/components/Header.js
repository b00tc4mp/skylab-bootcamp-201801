import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import Login  from "./Login";
import Logout  from "./Logout";

class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <header className="uk-padding-small">
                <div className="uk-container uk-flex uk-flex-between">
                    <NavLink to="/"
                             activeClassName="is-active"
                             exact={true}>
                        <h2>One Day Trips</h2>
                    </NavLink>
                    <nav>
                        {this.props.user.id ?
                            <div className="uk-display-inline">
                                <NavLink
                                    className="uk-button uk-button-small uk-button-primary uk-margin-small-right"
                                    to="/publish"
                                    activeClassName="is-active"
                                >
                                    Publish
                                </NavLink>

                                <NavLink
                                    className="uk-button uk-button-small uk-button-primary uk-margin-small-right"
                                    to={`/user-panel/${this.props.user.username}`}
                                    activeClassName="is-active"
                                >
                                    User Panel
                                </NavLink>

                                <Logout onUserLoggedIn={this.props.onUserLoggedIn} user={this.props.user}/>

                            </div>


                            :
                            <div>
                                <NavLink
                                    className="uk-button uk-button-small uk-button-primary uk-margin-small-right"
                                    to="/sign-up"
                                    activeClassName="is-active"
                                >
                                    Sign Up
                                </NavLink>
                                <Login onUserLoggedIn={this.props.onUserLoggedIn}/>
                            </div>
                        }


                    </nav>
                </div>
            </header>
        )
    }
}

export default Header;