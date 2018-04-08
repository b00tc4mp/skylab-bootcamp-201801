import React from 'react'
import api from '../../../../api'

class ModalLostPassword extends React.Component {
    constructor() {
        super()
        this.state = {
            email: ""
        }
    }

    keepInput = (e) => this.setState({ email: e.target.value })

    recovery = () => {
        const { state: { email } } = this

        if (email !== "") {

            api.recovery(email)
                .then(res => {
                    if (res.status === 'OK')

                        this.props.onLogin("", false)
                })
        }
    }

    render() {
        return (
            <div className={this.props.show ? "modal is-active" : "modal"}>
                <div className="modal-background"></div>
                <div className="modal-card">
                    <form onSubmit={e => { e.preventDefault(); this.recovery() }}>
                        <header className="modal-card-head">
                            <p className="modal-card-title"><strong>{"RECUPERAR MI CONTRASEÑA"}</strong></p>
                            <button className="delete" aria-label="close" onClick={this.props.onShowLostPassword}></button>
                        </header>
                        <section className="modal-card-body">
                            <div>
                                <div className="field control has-icons-left">

                                    <input type="email" className="input" placeholder="Introduce su email" onChange={this.keepInput} value={this.state.email} name="email" />

                                </div>
                            </div>
                        </section>
                        <footer className="modal-card-foot">
                            <button type="submit" className="button is-primary">{"Enviar"}</button>
                            <button className="button" onClick={this.props.onShowLostPassword}>Volver</button>
                        </footer>
                    </form>
                </div >
            </div >
        )
    }
}

export default ModalLostPassword