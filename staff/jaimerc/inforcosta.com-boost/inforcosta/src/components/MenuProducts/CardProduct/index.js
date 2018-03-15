import React from 'react'

function CardProduct(props) {
    return (
        <button className="button-card">
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={props.imageProduct} alt="Placeholder image" />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <p className="title is-7">{props.shortDescription}</p>
                    </div>
                    <p className="title is-7 has-text-right">{props.price}</p>
                </div>
            </div>
        </button>
    )
}

export default CardProduct