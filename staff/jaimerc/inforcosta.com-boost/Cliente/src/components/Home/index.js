import React from 'react'
import './styles/main.css'
import Carousel from './Carousel'

function Home(props) {
    return (
        <div className="container navbar-section-buttons">
            <div className="notification container">
                <Carousel product={props.productsPromo}/>
            </div>
        </div>
    )
}

export default Home
