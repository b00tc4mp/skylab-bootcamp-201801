import React from 'react'

function Image(props){
    return(
        <div className="tile is-parent is-vertical is-8">
        <article className="tile is-child box">
        <figure className="image is-4by3">
            <img src={props.image} alt="Placeholder image" />
        </figure>
    </article>
    </div>
    )
}

export default Image