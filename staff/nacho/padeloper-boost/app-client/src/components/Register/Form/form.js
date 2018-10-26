import React from 'react';

function Form(props){
    return(
        <form className="formulario" name="formulario_registro" >
                      <div>
                        <div className="input-group">
                          <input type="text" name="name" placeholder="type your name" onChange = {props.inputName} />
                        </div>
                        <div className="input-group">
                          <input type="text" name="surname" placeholder="type your surname" onChange = {props.inputSurname} />
                        </div>
                        <div className="input-group">
                          <input type="email" name="email" placeholder="email" onChange = {props.inputEmail} />
                        </div>
                        <div className="input-group">
                          <input type="text" name="username" placeholder="type your username" onChange = {props.inputUsername} />
                        </div>
                        <div className="input-group">
                          <input type="text" name="password" placeholder="password" onChange = {props.inputPassword} />
                        </div>
                        <input type="submit" name="btn-submit" defaultValue="GO" onClick = {props.create} />
                      </div>
        </form>
    )
}
export default Form