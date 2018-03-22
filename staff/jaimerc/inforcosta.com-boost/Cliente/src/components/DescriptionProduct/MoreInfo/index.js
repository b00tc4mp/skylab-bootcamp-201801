import React from 'react'

function MoreInfo(props) {
    return (
        <div className="tile is-parent is-2">
        <article className="tile is-child box">
            <p className="title">{props.title}</p>
        </article>
        </div>
    )
}

export default MoreInfo