import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import api from "../api";

//TODO being able to login from any page
//TODO pass the state user to parent component to be able to have it available anywhere when logged in
//TODO logged out button when logged in
//TODO close login modal after login

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }

    login = () => {
        const { username, password } = this.state
        api.login(username, password)
            .then(res => {
                this.props.onUserLoggedIn({ id: res.data.id, username })

                this.props.history.push(`user-panel/${username}`)
            })
    }
    componentWillReceiveProps() {
        console.log(this.props)
    }
    keepUsername = username => this.setState({ username });
    keepPassword = password => this.setState({ password });

    render() {
        return <div className="uk-display-inline">

            <button className="uk-button uk-button-small uk-button-primary uk-margin-small-right"
                /*{this.state.loggedIn ? style={display: 'none', opacity: 0}: ''}*/
                data-uk-toggle="target: #login">
                Login
            </button>
            <div id="login"
                data-uk-modal>
                <div className="uk-modal-dialog uk-modal-body">
                    <button className="uk-modal-close-default"
                        type="button"
                        uk-close />
                    <h2 className="uk-modal-title">Login</h2>
                    <form data-uk-grid
                        onSubmit={e => {
                            e.preventDefault();
                            this.login();
                        }}>
                        <div className="uk-width-1-2@m">
                            <input type="text"
                                className="uk-input "
                                placeholder="username"
                                onChange={e => this.keepUsername(e.target.value)}
                                value={this.state.username} />
                        </div>
                        <div className="uk-width-1-2@m">
                            <input type="text"
                                className="uk-input "
                                placeholder="password"
                                onChange={e => this.keepPassword(e.target.value)}
                                value={this.state.password} />
                        </div>
                        <div className="uk-width-1-1 ">
                            <input type="submit"
                                className="uk-button uk-button-primary"
                                value="login" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    }
}

export default withRouter(Login);