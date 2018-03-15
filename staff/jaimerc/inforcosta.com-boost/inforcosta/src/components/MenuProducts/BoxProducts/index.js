import React from 'react'
import CardProduct from '../CardProduct'

function BoxProducts(props) {
    return (
        <div className="tile is-child box">
            <div className="columns">
                <div className="column">
                    <CardProduct imageProduct={"https://bulma.io/images/placeholders/1280x960.png"} shortDescription={"Hola mundo"} price={"44 €"} />
                </div>
                <div className="column">
                    <CardProduct imageProduct={"https://bulma.io/images/placeholders/1280x960.png"} shortDescription={"Hola mundo"} price={"44 €"} />

                </div>
                <div className="column">
                    <CardProduct imageProduct={"https://bulma.io/images/placeholders/1280x960.png"} shortDescription={"Hola mundo"} price={"44 €"} />

                </div>
            </div>
            <div className="columns">
                <div className="column">
                    <CardProduct imageProduct={"https://bulma.io/images/placeholders/1280x960.png"} shortDescription={"Hola mundo"} price={"44 €"} />

                </div>
                <div className="column">
                    <CardProduct imageProduct={"https://bulma.io/images/placeholders/1280x960.png"} shortDescription={"Hola mundo"} price={"44 €"} />

                </div>
                <div className="column">
                    <CardProduct imageProduct={"https://bulma.io/images/placeholders/1280x960.png"} shortDescription={"Hola mundo"} price={"44 €"} />

                </div>
                
            </div>
        </div>

    )
}

export default BoxProducts