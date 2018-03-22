import React from 'react'
import Input from '../../../Input'
import apiClient from '../../../../apiClient'


class ModalLoginUser extends React.Component {
    constructor() {
        super()
        this.state = {
            login: {}
        }
    }

    validate = () => {
        if (this.refs.username.getValue() !== "" || this.refs.password.getValue() !== "")
            apiClient.validateUser(this.refs.username.getValue(), this.refs.password.getValue())
                .then(res => {
                    this.setState({ login: res.status })

                    if (res.status === 'OK') {

                        localStorage.setItem('token', res.data.token)
                        
                        this.props.onLogin(data.data.username, false)
                    }
                })
    }

    render() {
        return (
            <div className={this.props.show ? "modal is-active" : "modal"}>
                <div className="modal-background" />
                <div className="modal-card">
                    <form onSubmit={e => { e.preventDefault(); this.validate() }}>
                        <header className="modal-card-head">
                            <p className="modal-card-title"><strong>INICIE SESIÓN</strong></p>
                            <button className="delete" aria-label="close" onClick={this.props.onShowLogin}></button>
                        </header>
                        <section className="modal-card-body">
                            <div>
                                <div className="field control has-icons-left">

                                    <Input ref={"username"} classInput={"input"} typeInput={"text"} placeholderInput={"Nombre de Usuario"} />

                                </div>
                                <div className="field control has-icons-left">

                                    <Input ref={"password"} classInput={"input"} typeInput={"password"} placeholderInput={"Password"} />

                                </div>
                                <div className="field control has-icons-left">

                                    <button className="button is-white" onClick={this.props.onShowCreate}>{"Crear una nueva cuenta"}</button>

                                </div>
                                <div className="field control has-icons-left">

                                    <button className="button is-white" onClick={this.props.onShowPasswordLost}>{"¿Ha olvidado su contraseña?"}</button>

                                </div>
                            </div>

                        </section>
                        <footer className="modal-card-foot">
                            <button type="submit" className="button is-primary">Iniciar Sesion</button>
                            <button className="button" onClick={this.props.onShowLogin}>Volver</button>
                        </footer>
                    </form>
                </div >
            </div >
        )
    }
}

export default ModalLoginUser
