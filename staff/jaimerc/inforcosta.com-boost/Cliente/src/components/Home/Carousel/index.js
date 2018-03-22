import React from 'react'
import './styles/main.css'

function Carousel(props) {
    if (props.product)
        return (
            <div className="carousel">
                <div className="items-container">
                    {props.product.map(image => {
                        return (
                            <div className="item">
                                <img className="image-carousel" src={image.HighPic} key={image.ARTICULO} alt={image.DESCRIPTION} />
                                <div>
                                    <i className="fa fa-glass"></i>
                                </div>
                                <p>{image.DESCRIPTION}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
}
export default Carousel

