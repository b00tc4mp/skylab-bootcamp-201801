import React, { Component } from 'react'
import Slider from 'react-slick'
import { NavLink } from 'react-router-dom'
import '../../../node_modules/slick-carousel/slick/slick.css'
import '../../../node_modules/slick-carousel/slick/slick-theme.css'
import './css/main.css'

class Carousel extends Component {
    render() {
        const settings = {
            infinite: true,
            speed: 500,
            autoplay: true,
            nextArrow: 0,
            prevArrow: 0
        };
        return (
            <div>
                <Slider {...settings}>
                    <div>
                        <div className="fondo01 fondo">
                            <h1>Recipe Book</h1>
                            <h6>Get a taste of what you can find in our venue</h6>
                            <NavLink to="/" target="_blank" className="square-button">Go to our menu</NavLink>
                        </div>
                    </div>
                    <div>
                        <div className="fondo02 fondo">
                            <h2>New Categories</h2>
                            <h6>Learn how to cook like a pro in our blog</h6>
                            <NavLink to="/category" target="_blank" className="square-button">Go to our category</NavLink>
                        </div>
                    </div>
                    <div>
                        <div className="fondo03 fondo">
                            <h2>New Collections</h2>
                            <h6>We use 4 classes of chesse, jalapeños, cream and magma sauce</h6>
                            <NavLink to="/collection" target="_blank" className="square-button">Go to our collection</NavLink>
                        </div>
                    </div>
                </Slider>
            </div>
        )
    }
}

export default Carousel