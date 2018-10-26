import React from 'react'
import './styles.css'

function Order(props) {
    return (
        <div>
            <label className="title is-5 cart-title">{"Tu pedido"}</label>

            {props.products.map((item,index) => {
                return (
                    <div className="columns order-product-card" key={index}>
                        <div className="column is-2">
                            <img className="image-card" src={item.HighPic} alt={item.SHORTDESC} />
                        </div>
                        <div className="column is-6">
                            <h3><strong><a onClick={e => { e.preventDefault(); props.onShowArticle(item.ARTICULO) }}>{item.ARTICULO}</a></strong></h3>
                            <label className="card-description">{item.DESCRIPCION}</label>
                        </div>
                        <div className="column unit-product">
                            <p>{"Unidades"}</p>
                            <input className="input-unit" type="number" placeholder="1" min="1" max="10" onChange={e => props.onLoadPriceByUnits(e, item.ARTICULO)} />
                        </div>
                        <div className="column price-product">
                            <p>{"Precio"}</p>
                            <label className="input-unit"><strong>{parseFloat(item.VENTA * 1.1).toFixed(2) + "€"}</strong></label>
                        </div>
                        <div className="column delete-product">
                            <a onClick={e => { e.preventDefault(); props.onDeleteProduct(item.ARTICULO) }} className="button is-danger is-outlined cardProduct-button-delete">
                                <label className="delete"></label>
                            </a>
                        </div>
                    </div>)
            })}
        </div>
    )
}

export default Order
