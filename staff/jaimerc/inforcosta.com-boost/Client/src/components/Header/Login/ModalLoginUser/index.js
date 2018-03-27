import React from 'react'
import api from '../../../../api'
import './styles.css'

class ModalLoginUser extends React.Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: ""
        }
    }

    keepInput= (e) => {
        let prop = e.target.name
        this.setState({ [prop]: e.target.value })
    }

    validate = () => {
        const { state: { username, password } } = this

        if (username !== "" || password !== "")
            api.validateUser(username, password)
                .then(res => {

                    if (res.status === 'OK') {

                        sessionStorage.setItem('token', res.data.token)

                        this.props.onLogin(res.data.username, true, false)
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

                                    <input type="text" className="input" placeholder="Nombre de Usuario" onChange={this.keepInput} value={this.state.username} name="username"/>

                                </div>
                                <div className="field control has-icons-left">

                                    <input type="password" className="input" placeholder="Password" onChange={this.keepInput} value={this.state.password} name="password"/>

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
