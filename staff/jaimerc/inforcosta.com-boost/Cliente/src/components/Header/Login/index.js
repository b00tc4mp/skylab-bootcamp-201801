import React from 'react'
import ModalLoginUser from './ModalLoginUser'
import ModalCreateUser from './ModalCreateUser'
import ModalLostPassword from './ModalLostPassword'
import { withRouter } from 'react-router-dom'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            login: true,
            username: "",
            showLogin: false,
            showCreate: false,
            showLostPassword: false
        }
    }

    login = (username, login) => {
        this.setState({ username: username, login: login })
    }

    showLogin = () => {
        if (this.state.login) {
            this.state.showLogin ? this.setState({ showLogin: false }) : this.setState({ showLogin: true })
        } else {
            this.props.history.push(`/carrito/${this.state.username}`)
        }

    }

    showCreate = () => {
        this.state.showCreate ? this.setState({ showCreate: false }) : this.setState({ showCreate: true })

    }

    showLostPassword = () => {
        this.state.showLostPassword ? this.setState({ showLostPassword: false }) : this.setState({ showLostPassword: true })

    }

    render() {
        return (
            <div>
                <div className="level-right">
                    <div className="level-item">
                        <button className="button is-rounded is-inverted contact-cuenta" onClick={this.showLogin}>{"MI CUENTA 🛒"}</button>
                        <label>{this.state.message}</label>
                    </div>
                </div>

                <ModalLoginUser
                    show={this.state.showLogin}
                    onShowLogin={this.showLogin}
                    onShowCreate={this.showCreate}
                    onShowPasswordLost={this.showLostPassword}
                    onLogin={this.login} />

                <ModalCreateUser
                    show={this.state.showCreate}
                    onShowCreate={this.showCreate} />

                <ModalLostPassword
                    show={this.state.showLostPassword}
                    onShowLostPassword={this.showLostPassword} />
            </div>
        )
    }
}

const LoginWithRouter = withRouter(Login)

export default LoginWithRouter