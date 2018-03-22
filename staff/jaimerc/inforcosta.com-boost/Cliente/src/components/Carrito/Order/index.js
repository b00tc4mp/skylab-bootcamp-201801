import React from 'react'
import './styles/main.css'

function Order(props) {
    return (
        <div>
            <label class="title is-5 cart-title">Tu pedido</label>

            {props.products.map(item => {
                return (
                    <div className="columns order-product-card">
                        <div className="column is-2">
                            <img className="image-card" src={item.HighPic} alt={item.SHORTDESC}/>
                        </div>
                        <div className="column is-6">
                            <h3><strong>{item.ARTICULO}</strong></h3>
                            <label className="card-description">{item.DESCRIPCION}</label>
                        </div>
                        <div className="column unit-product">
                            <h4>Unidades</h4>
                            <input className="input-unit" type="number" placeholder="1" min="0" max="10" />
                        </div>
                        <div className="column delete-product">
                            <a onClick={e => { e.preventDefault(); props.onDeleteProduct(item.ARTICULO) }} className="button is-danger is-outlined">
                                <label class="delete"></label>
                            </a>
                        </div>
                    </div>)
            })}
        </div>
    )
}


export default Order