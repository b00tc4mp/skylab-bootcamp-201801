import React from 'react'
import './styles/main.css'
import Contact from './Contact'
import Login from './Login'
import Search from './Search'
import Menu from './Menu'

function Header(props) {

    return (
        <div>

            <nav className="level nav-bar-contact-session">
                <Contact />

                <Login />
            </nav>

            <Search />

            <Menu />
           
        </div >

    )
}

export default Header