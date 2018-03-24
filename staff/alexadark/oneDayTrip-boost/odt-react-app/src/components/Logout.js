import React, {Component} from 'react'
import {withRouter} from "react-router-dom";


class Logout extends Component {
    constructor(props) {
        super(props)
    }

    logout = () => {
        this.props.onUserLoggedIn('','')
        localStorage.removeItem("username")
        localStorage.removeItem("id")
        this.props.history.push('/home')

    }

    render() {

        return (

                <div className="uk-display-inline">
                    <button className="uk-button uk-button-small uk-button-secondary" onClick={this.logout}>Logout</button>
                    <div className="uk-text-small uk-text-center uk-text-uppercase uk-margin-small-top uk-text-muted">Welcomme {this.props.user.username}</div>
                </div>


        );
    }
}


export default withRouter(Logout);
