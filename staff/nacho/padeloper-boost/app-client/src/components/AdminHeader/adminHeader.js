import React from 'react'
import { NavLink } from 'react-router-dom';
import './css/main.css'

function AdminHeader(props){

    return(
        <nav className="navbar navbar-default navbar-admin">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" id="sidebarCollapse" className="navbar-btn">
                  <span />
                  <span />
                  <span />
                </button>
              </div>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                
                  <li><NavLink to = '/adminmyleagues'>My leagues</NavLink></li>
                  <li><NavLink to = '/Login'>Log Out</NavLink></li>
                </ul>
              </div>
            </div>
        </nav>
    )
}
export default AdminHeader