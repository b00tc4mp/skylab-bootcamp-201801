import React from 'react';
function Form(props){
    return(
        <form className="formulario" name="formulario_registro" >
                  <div>    
                    <div className="input-group">
                      <input type="email" name="email" placeholder="email" onChange = {props.inputEmail} />
                    </div>
                    <div className="input-group">
                      <input type="text" name="username" placeholder="type your username" onChange = {props.inputUsername}/>
                    </div>
                    <div className="input-group">
                      <input type="text" name="password" placeholder="password" onChange = {props.inputPassword}/>
                    </div>
                    <input type="submit" name="btn-submit" defaultValue="GO PADEL" onClick = {props.login} />
                  </div>
        </form>
    )
}
export default Form