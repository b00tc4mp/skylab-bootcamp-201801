import React from 'react'
import api from '../../../../api'

class ModalCreateUser extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            surname: "",
            address1: "",
            address2: "",
            email: "",
            telf: "",
            nif: "",
            username: "",
            password: "",
            passwordConfirm: ""
        }
    }

    keepInput = (e) => {
        let prop = e.target.name
        this.setState({ [prop]: e.target.value })
    }

    create = () => {
        const { state: { name, surname, address1, address2, telf, email, nif, username, password, passwordConfirm } } = this

        if (password === passwordConfirm) {

            if (name !== "" || surname !== "" || address1 !== "" || address2 !== "" || telf !== "" || email !== "" || nif !== "" || username !== "" || password !== "") {

                api.createUser(name, surname, address1, address2, telf, email, nif, username, password)
                    .then(res => {

                        if (res.status === 'OK') {

                            sessionStorage.setItem('token', res.data.token)

                            this.props.onLogin(res.data.username, true)
                        }
                    })
            }
        }
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

                                    <input type="text" className="input" placeholder="Nombre" onChange={this.keepInput} value={this.state.name} name="name" />

                                </div>
                                <div className="field control has-icons-left">

                                    <input type="text" className="input" placeholder="Apellidos" onChange={this.keepInput} value={this.state.surname} name="surname" />

                                </div>
                                <div className="field control has-icons-left">

                                    <input type="text" className="input" placeholder="Dirección Física" onChange={this.keepInput} value={this.state.address1} name="address1" />

                                </div>
                                <div className="field control has-icons-left">

                                    <input type="text" className="input" placeholder="Dirección de Entrega" onChange={this.keepInput} value={this.state.address2} name="address2" />

                                </div>
                                <div className="field control has-icons-left">

                                    <input type="email" className="input" placeholder="Email" onChange={this.keepInput} value={this.state.email} name="email" />

                                </div>
                                <div className="field control has-icons-left">

                                    <input type="tel" className="input" placeholder="Teléfono de Contacto" onChange={this.keepInput} value={this.state.telf} name="telf" />

                                </div>
                                <div className="field control has-icons-left">

                                    <input type="text" className="input" placeholder="DNI - NIF" onChange={this.keepInput} value={this.state.nif} name="nif" />

                                </div>
                                <div className="field control has-icons-left">

                                    <input type="text" className="input" placeholder="Nombre de Usuario" onChange={this.keepInput} value={this.state.username} name="username" />

                                </div>
                                <div className="field control has-icons-left">

                                    <input type="password" className="input" placeholder="Contraseña" onChange={this.keepInput} value={this.state.password} name="password" />

                                </div>
                                <div className="field control has-icons-left">

                                    <input type="password" className="input" placeholder="Confirma la contraseña" onChange={this.keepInput} value={this.state.passwordConfirm} name="passwordConfirm" />

                                </div>
                            </div>
                        </section>
                        <footer className="modal-card-foot">
                            <button type="submit" className="button is-primary">{"Crear usuario"}</button>
                            <button className="button" onClick={this.props.onShowCreate}>{"Volver"}</button>
                        </footer>
                    </form>
                </div >
            </div >
        )
    }
}

export default ModalCreateUser