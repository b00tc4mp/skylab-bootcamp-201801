import React from 'react'
import SearchWithRouter from '../Search';
import { NavLink } from 'react-router-dom'

function Header(props) {
    return (
            <div className="App">
                <header className="App-header">
                    <nav id="header" className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <NavLink className="nav-link" to="/" activeClassName="active">{props.lang == 'es'? 'Peliculas' : 'Movies'} & Series</NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                <NavLink className="nav-link" to="/films" activeClassName="active">{props.lang == 'es'? 'Peliculas' : 'Movies'}</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="nav-link" to="/tv" activeClassName="active">Series</NavLink>
                                </li>
                                <li>
                                    <button id="Find" className="btn btn-outline-success my-2 my-sm-0" onClick={() => props.onChangeLang('es')}>ES</button>
                                    <button id="Find" className="btn btn-outline-success my-2 my-sm-0" onClick={() => props.onChangeLang('en')}>EN</button>
                                </li>
                            </ul>
                            <SearchWithRouter lang={props.lang} />
                        </div>
                    </nav>
                </header>
            </div>
    )
}


export default Header

