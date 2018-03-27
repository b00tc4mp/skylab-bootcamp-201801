import React from 'react'
import ModalLoginUser from './ModalLoginUser'
import ModalCreateUser from './ModalCreateUser'
import ModalLostPassword from './ModalLostPassword'
import { withRouter } from 'react-router-dom'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            login: false,
            username: "",
            showLogin: false,
            showCreate: false,
            showLostPassword: false
        }
    }

    login = (username, login) => {
        this.setState({ username, login, showCreate: false, showLogin: false, showLostPassword: false })
    }

    logout = () => {
        this.setState({ login: false, showLogin: false, username: "" })
        localStorage.clear()
        sessionStorage.clear()
        this.props.history.push(`/`)
    }

    showLogin = () => {
        if (!this.state.login)
            this.state.showLogin ? this.setState({ showLogin: false }) : this.setState({ showLogin: true })
        else
            this.props.history.push(`/cart/${this.state.username}`)
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
                        {sessionStorage.getItem('token') ?
                            <button type="button" className="button is-rounded is-inverted contact-cuenta" onClick={this.logout}>{`${this.state.username} - CERRAR SESIÓN`}</button> : ""}
                    </div>
                    <div className="level-item">
                        <button type="button" className="button is-rounded is-inverted contact-cuenta" onClick={this.showLogin}>{"MI CUENTA 🛒"}</button>
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
                    onShowCreate={this.showCreate}
                    onLogin={this.login} />

                <ModalLostPassword
                    show={this.state.showLostPassword}
                    onShowLostPassword={this.showLostPassword}
                    onLogin={this.login} />
            </div>
        )
    }
}

const LoginWithRouter = withRouter(Login)

export default LoginWithRouter