import React from 'react'
import './styles/main.css'

class Details extends React.Component {

    addCart = () => {
        var articulos = []
        if (localStorage.getItem('articulo')) {
            articulos = JSON.parse(localStorage.getItem('articulo'))
        } else {
            articulos.push(this.props.product)
            localStorage.setItem('articulo', JSON.stringify(articulos))
        }
    }

    render() {
        return (
            <div className="tile is-parent is-3">
                <article className="tile is-child box">
                    <table className="table is-striped">
                        <thead className="title is-5">
                            <tr>
                                <th><strong>{this.props.title}</strong></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="is-4">
                            <tr>
                                <td><strong>{"Categoría"}</strong></td>
                                <td>{this.props.product.CATEGORIA}</td>
                            </tr>
                            <tr>
                                <td><strong>{"Subcategoría"}</strong></td>
                                <td>{this.props.product.SUBCATEGORIA}</td>
                            </tr>
                            <tr>
                                <td><strong>{"Cod. Artículo"}</strong></td>
                                <td>{this.props.product.ARTICULO}</td>
                            </tr>
                            <tr>
                                <td><strong>{"Fabricante"}</strong></td>
                                <td>{this.props.product.MARCA}</td>
                            </tr>
                            <tr>
                                <td><strong>{"Stock"}</strong></td>
                                <td>{(this.props.product.STOCK === 0) ? ("No disponible") : this.props.product.STOCK}</td>
                            </tr>

                        </tbody>

                    </table>
                    <div className="price-product">
                        <p class="subtitle is-4 is-spaced price-was">{((1.21 * (parseFloat(this.props.product.VENTA) * 1.1)).toFixed(2)) + " €"}</p>

                        <label class="title is-2 is-spaced price-now">{(parseFloat(this.props.product.VENTA) * 1.1).toFixed(2) + " €"}</label>

                        <a onClick={e => { e.preventDefault(); this.addCart() }} className="button is-dark is-outlined">{"Añadir a la cesta"}</a>
                    </div>
                </article>
            </div>
        )
    }
}

export default Details