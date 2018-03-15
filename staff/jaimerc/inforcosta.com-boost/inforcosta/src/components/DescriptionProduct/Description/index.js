import React from 'react'

function Description(props) {
    return (
        <div className="tile is-parent is-11">

            <article className="tile is-child box">
                <p className="title is-6">{props.title}</p>
                <p className="title is-7">
                    {props.text}
                </p>
            </article>
        </div>
    )
}

export default Description