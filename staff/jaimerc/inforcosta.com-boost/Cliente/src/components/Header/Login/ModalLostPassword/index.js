import React from 'react'
import Input from '../../../Input'
import apiClient from '../../../../apiClient'

class ModalLostPassword extends React.Component {

    constructor() {
        super()
        this.state = {
            recovery: {}
        }
    }


    recovery = () => {
        if (this.refs.email.getValue() !== "")
            apiClient.recovery(this.refs.email.getValue())
                .then(data => {
                    console.log(data)
                    this.setState({ recovery: data })
                })
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

                                    <Input ref={"email"} classInput={"input"} typeInput={"email"} placeholderInput={"Introduce su email"} />

                                </div>
                            </div>
                        </section>
                        <footer className="modal-card-foot">
                            <button className="button is-primary" onClick={this.recovery}>{"Enviar"}</button>
                        </footer>
                    </form>
                </div >
            </div >
        )
    }
}

export default ModalLostPassword