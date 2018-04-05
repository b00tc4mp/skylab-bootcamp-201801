import React from 'react'
import './styles/main.css'

function Jumbotron(props) {
    return (
        <div id="Jumbotron" className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">{props.title}</h1>
            </div>
        </div>
    )
}

export default Jumbotron