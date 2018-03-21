import React, { Component } from 'react'
import { Redirect } from "react-router";
import Header from '../Header/header'
import Form from './Form/form'
import './css/main.css'
import api_client from 'api-client'


class Login extends Component{

  constructor(){
    super()
    this.state ={
      redirect:false,
      email:"",
      username:"",
      password:""
    }
  }

  // logUser = (e) => {

  //   const {email,username,password} = this.state    
  //   e.preventDefault()
    
  // }
  keepInputEmail = (e) => { e.preventDefault(); this.setState({email:e.target.value})}
  keepInputUsername = (e) => { e.preventDefault(); this.setState({username:e.target.value})}
  keepInputPassword = (e) => { e.preventDefault(); this.setState({password:e.target.value})}

  logUser = (e) => {
    e.preventDefault()
    const {email, username, password} = this.state

    api_client.loginUser(email,username,password)
    .then((data) => {

      console.log(data)

      if(data){

        this.props.setUserId(data.user._id) 
        this.setState({
          redirect:true
        })

      }
    })
    .catch(console.error)
  }

  render(){
    return(
      <div>
      {(this.state.redirect) ? <Redirect to='/adminleagues' /> : undefined}
      <Header />      
      <div className="col-md-12 centered content-index">
        <div className="row">
          <div className="col-md-12">
            <div className="contenedor-formulario">
              <div className="wrap">
                <h3 className="register">LOGIN</h3>
  

                <Form 
                  
                  login = {this.logUser}
                  inputEmail = {this.keepInputEmail}
                  inputUsername = {this.keepInputUsername}
                  inputPassword = {this.keepInputPassword}
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
export default Login