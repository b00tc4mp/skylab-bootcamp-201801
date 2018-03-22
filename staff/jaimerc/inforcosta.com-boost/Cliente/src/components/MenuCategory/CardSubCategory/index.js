import React from 'react'

function CardSubCategory(props) {

    return (
        <button className="button-card" onClick={e => {e.preventDefault(); props.onShowCategory(props.id)}}>
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={props.imageSubCategory} alt={"imagen de subcategoria"} />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4 has-text-centered">{props.subCategory}</p>
                        </div>
                    </div>
                </div>
            </div>
        </button>
    )
}

export default CardSubCategory
