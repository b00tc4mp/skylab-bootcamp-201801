import React, { Component } from 'react'
import './css/main.css'
import Header from '../Header/header'
import Form from './Form/form'
import api_client from 'api-client'

class Register extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      name: "",
      surname: "",
      email: "",
      username: "",
      password: ""
    }
  }

  insertUser = (e) => {
    e.preventDefault();

    const { name, surname, email, username, password } = this.state

    api_client.registerUser(name, surname, email, username, password)
      .then((data) => { console.log(data) })
      .catch(console.error)
  }

  keepInputName = (e) => { e.preventDefault(); this.setState({ name: e.target.value }) }
  keepInputSurname = (e) => { e.preventDefault(); this.setState({ surname: e.target.value }) }
  keepInputEmail = (e) => { e.preventDefault(); this.setState({ email: e.target.value }) }
  keepInputUsername = (e) => { e.preventDefault(); this.setState({ username: e.target.value }) }
  keepInputPassword = (e) => { e.preventDefault(); this.setState({ password: e.target.value }) }



  render() {
    return (
      <div>
        <Header />
        <div className="col-md-12 centered content-index">
          <div className="row">
            <div className="col-md-12">
              <div className="contenedor-formulario">
                <div className="wrap">
                  <h3 className="register">REGISTER</h3>
                  <Form
                    create={this.insertUser}
                    inputName={this.keepInputName}
                    inputSurname={this.keepInputSurname}
                    inputEmail={this.keepInputEmail}
                    inputUsername={this.keepInputUsername}
                    inputPassword={this.keepInputPassword}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Register