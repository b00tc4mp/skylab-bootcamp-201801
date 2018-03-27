import React from 'react'
import './styles.css'

function Contact(props) {
    return (
        <div className="level-left">
            <div className="level-item">
                <a onClick={e => { e.preventDefault(); props.onHome() }} className="button is-rounded is-inverted contact-cuenta">{"HOME 🏡"}</a>
            </div>
        </div>
    )
}

export default Contact