import React, { Component } from 'react'
import './index.css'
import logo from '../../logo.png'
import Search from '../Search'
import { NavLink } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-inverse navbar-fixed-top color-header">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                </button>
                                <a href=""><img src={logo} alt="" /></a>
                            </div>
                            <Search />
                            <div className="collapse navbar-collapse" id="myNavbar">
                                <ul className="nav navbar-nav">
                                    <li><NavLink to="/">Home</NavLink></li>
                                    <li><NavLink to="/category">Category</NavLink></li>
                                    <li><NavLink to="/collection">Collection</NavLink></li>
                                </ul>
                                <ul className="nav navbar-nav navbar-right">
                                    <li><a href=""><span className="glyphicon glyphicon-user" /> Sign Up</a></li>
                                    <li><a href=""><span className="glyphicon glyphicon-log-in" /> Login</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>

            </div>
        );
    }
}

export default Header

