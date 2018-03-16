import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header className="uk-padding-small">
        <div className="uk-container uk-flex uk-flex-between">
            <NavLink to="/"
                     activeClassName="is-active"
                     exact={true}><h2>One Day Trips</h2></NavLink>
            <nav>
                <NavLink className="uk-button uk-button-small uk-button-primary uk-margin-small-right" to="/publish"
                         activeClassName="is-active">Publish</NavLink>
                <NavLink className="uk-button uk-button-small uk-button-primary uk-margin-small-right" to="/sign-up"
                         activeClassName="is-active">Sign Up</NavLink>
                <NavLink className="uk-button uk-button-small uk-button-primary uk-margin-small-right" to="/user-panel"
                         activeClassName="is-active">User Panel</NavLink>
            </nav>
        </div>


    </header>
);

export default Header;