import React from 'react'
import './styles.css'
import { withRouter } from 'react-router-dom'
import Contact from './Contact'
import Login from './Login'
import Search from './Search'
import Menu from './Menu'

class Header extends React.Component {

    home = () => {
        this.props.history.push(`/`)
    }

    render() {
        return (
            <div>

                <nav className="level nav-bar-contact-session">
                    <Contact onHome={this.home} />

                    <Login />
                </nav>

                <Search />

                <Menu />

            </div >

        )
    }
}

export default withRouter(Header)