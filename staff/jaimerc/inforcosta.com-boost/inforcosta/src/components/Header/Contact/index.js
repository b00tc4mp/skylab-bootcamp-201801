import React from 'react'
import './styles/main.css'

function Contact(props) {
    return (
        <nav className="level nav-bar-contact-session">
            <div className="level-left">
                <div className="level-item">
                    <a class="button is-rounded is-inverted contact-cuenta">CONTACTO ✉️</a>
                </div>
            </div>
            <div className="level-right">
                <div className="level-item">
                    <a class="button is-rounded is-inverted contact-cuenta">MI CUENTA 🛒</a>
                </div>
            </div>
        </nav>
    )
}

export default Contact