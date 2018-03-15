import React from 'react'

function Details(props) {
    return (
        <div className="tile is-parent is-3">
        <article className="tile is-child box">
            <p className="title is-6">{props.title}</p>
        </article>
        </div>
    )
}

export default Details