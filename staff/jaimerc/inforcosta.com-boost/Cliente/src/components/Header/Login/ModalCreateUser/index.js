import React from 'react'
import Input from '../../../Input'
import apiClient from '../../../../apiClient'

class ModalCreateUser extends React.Component {
    constructor() {
        super()
        this.state = {
            newUser: {}
        }
    }

    create = () => {
        const { refs: { name, surname, address1, address2, telf, email, nif, username, password } } = this

        if (name.getValue() !== "" || surname.getValue() !== "" || address1.getValue() !== "" || address2.getValue() !== "" || telf.getValue() !== "" || email.getValue() !== "" || nif.getValue() !== "" || username.getValue() !== "" || password.getValue() !== "")
            apiClient.createUser(name.getValue(), surname.getValue(), address1.getValue(), address2.getValue(), telf.getValue(), email.getValue(), nif.getValue(), username.getValue(), password.getValue())
                .then(data => {
                    this.setState({ newUser: data })
                })
    }

    render() {
        return (
            <div className={this.props.show ? "modal is-active" : "modal"}>
                <div className="modal-background" />
                <div className="modal-card">
                    <form onSubmit={e => { e.preventDefault(); this.create() }}>
                        <header className="modal-card-head">
                            <p className="modal-card-title">{"Rellene todos los campos"}</p>
                            <button className="delete" aria-label="close" onClick={this.props.onShowCreate} />
                        </header>
                        <section className="modal-card-body">
                            <div>
                                <div className="field control has-icons-left">

                                    <Input ref={"name"} classInput={"input"} typeInput={"text"} placeholderInput={"Nombre"} />

                                </div>
                                <div className="field control has-icons-left">

                                    <Input ref={"surname"} classInput={"input"} typeInput={"text"} placeholderInput={"Apellidos"} />

                                </div>
                                <div className="field control has-icons-left">

                                    <Input ref={"address1"} classInput={"input"} typeInput={"text"} placeholderInput={"Dirección física"} />

                                </div>
                                <div className="field control has-icons-left">

                                    <Input ref={"address2"} classInput={"input"} typeInput={"text"} placeholderInput={"Dirección de entrega"} />

                                </div>
                                <div className="field control has-icons-left">

                                    <Input ref={"email"} classInput={"input"} typeInput={"email"} placeholderInput={"Correo electrónico"} />

                                </div>
                                <div className="field control has-icons-left">

                                    <Input ref={"telf"} classInput={"input"} typeInput={"tel"} placeholderInput={"Teléfono de contacto"} />

                                </div>
                                <div className="field control has-icons-left">

                                    <Input ref={"nif"} classInput={"input"} typeInput={"text"} placeholderInput={"DNI - NIF"} />

                                </div>
                                <div className="field control has-icons-left">

                                    <Input ref={"username"} classInput={"input"} typeInput={"text"} placeholderInput={"Nombre de Usuario"} />

                                </div>
                                <div className="field control has-icons-left">

                                    <Input ref={"password"} classInput={"input"} typeInput={"password"} placeholderInput={"Contraseña"} />

                                </div>
                                <div className="field control has-icons-left">

                                    <Input ref={"password"} classInput={"input"} typeInput={"password"} placeholderInput={"Confirmar contraseña"} />

                                </div>
                            </div>
                        </section>
                        <footer className="modal-card-foot">
                            <button type="submit" className="button is-primary" onClick={this.create}>{"Crear usuario"}</button>
                            <button className="button" onClick={this.props.onShowCreate}>{"Volver"}</button>
                        </footer>
                    </form>
                </div >
            </div >
        )
    }
}

export default ModalCreateUser