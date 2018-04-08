import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../Header/header';
import './css/main.css'


function Home(props){
    return(
        <div>
        <Header />
        <div className="col-md-12 centered content-index">
          <div className="row">
            <div className="col-md-12 h1-silohuette">
              <div className="content-silhouette">
                {/* <img src="img/silueta.png" class="silhouette"> */}
              </div>
              <h1>Gestiona tus ligas y torneos</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 log">
            <NavLink to = '/login'><span className="login">Log In</span></NavLink>
            <NavLink to = '/register'><span className="login">Register</span></NavLink>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 textslogan">
              <p className ='slogan'>Crea ligas y torneos o únete a ellos <br />
                Mantén tu nivel competitivo, cada juego cuenta
              </p>
            </div>
          </div>
        </div> 

      </div>

    );
}
export default Home