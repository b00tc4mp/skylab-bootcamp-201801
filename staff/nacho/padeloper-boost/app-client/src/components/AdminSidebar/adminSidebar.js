import React from 'react'
import { NavLink } from 'react-router-dom';
import './css/main.css'

function AdminSidebar(props){

    return(
        <nav id="sidebar">
          <div className="sidebar-header">
            <h3 className="padeloper-admin">PADELOPER</h3>
          </div>
          <ul className="list-unstyled components">
            <p className ='welcomeadmin'>Welcome {props.userName.username}</p>
            <li>
              <NavLink to ='/adminstats' > User Info </NavLink>
            </li>
            <li className="active">
              <a href="#adminleagues" data-toggle="collapse" aria-expanded="false">League</a>
              <ul className="collapse list-unstyled" id="homeSubmenu">
                <li><a>Home 1</a></li>
                <li><a>Home 2</a></li>
                <li><a>Home 3</a></li>
              </ul>
            </li>
            <li>
              <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">Tournament</a>
              <ul className="collapse list-unstyled" id="pageSubmenu">
                <li><a>Page 1</a></li>
                <li><a>Page 2</a></li>
                <li><a>Page 3</a></li>
              </ul>
            </li>
            <li>
              <a>Round Robin</a>
            </li>
          </ul>
          <ul className="list-unstyled CTAs">
            
            <li><NavLink to = '/adminleaguecreate' className="download">Create League</NavLink></li>
            <li><NavLink to = '/adminleagues' className="article">Admin Panel</NavLink></li>
          </ul>
        </nav>
    )
}
export default AdminSidebar