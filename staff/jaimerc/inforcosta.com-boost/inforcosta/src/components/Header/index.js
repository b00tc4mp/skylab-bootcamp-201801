import React from 'react'
import Contact from './Contact'
import Search from './Search'
import Menu from './Menu'

function Header(props) {

    return (
        <div>
            <Contact />

            <Search />

            <Menu />
        </div>

    )
}

export default Header