import React from 'react'
import CardProduct from '../CardProduct'
import './styles/main.css'

function BoxProducts(props) {
    if (props.products)
        return (
            <div className="tile is-child box">
                <div className="columns is-multiline">
                    {props.products.map(item => {
                        return (
                            <div className="column is-one-quarter" key={item.article}>
                                <CardProduct 
                                imageProduct={item.HighPic} 
                                shortDescription={(item.SHORTDESC) ? item.SHORTDESC : item.DESCRIPCION} 
                                price={item.VENTA}
                                priceProm={item.VENTA}
                                article={item.article} />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
}

export default BoxProducts