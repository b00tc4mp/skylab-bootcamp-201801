import React from 'react'

function Description(props) {
    return (
        <div className="tile is-parent is-11">

            <article className="tile is-child box">
                <p className="title is-5">{props.title}</p>
                <p className="title is-6">
                    <strong>{props.text}</strong>
                    {(props.text1) ? `   (${props.text1})` : ""}
                </p>
            </article>
        </div>
    )
}

export default Description