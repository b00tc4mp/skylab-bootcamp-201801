import React from 'react'
import './css/main.css'

function UserHeader(props){

    return(
        <nav className="navbar navbar-default">
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
                  <li><a>My leagues</a></li>
                  <li><a>Log Out</a></li>
                </ul>
              </div>
            </div>
        </nav>
    )
}
export default UserHeader