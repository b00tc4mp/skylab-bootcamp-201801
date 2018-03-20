import React from 'react'
import './css/main.css'
import { NavLink } from 'react-router-dom';

function Header(props){
    return(
        <header>
          <nav className="navbar navbar-default ">
            <div className="container-fluid">
              {/* Brand and toggle get grouped for better mobile display */}
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <NavLink to = '/'><span className="navbar-brand padeloper">PADELOPER</span></NavLink>              
              </div>
              {/* Collect the nav links, forms, and other content for toggling */}
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                  <li><a>About</a></li>
                  <li className="dropdown">
                    <a  className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Contact <span className="caret" /></a>
                  </li>
                </ul>
              </div>{/* /.navbar-collapse */}
            </div>{/* /.container-fluid */}
          </nav>
        </header>
    )
}
export default Header