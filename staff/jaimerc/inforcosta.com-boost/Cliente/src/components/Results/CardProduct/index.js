import React from 'react'
import './styles/main.css'
import withRouter from 'react-router-dom/withRouter'

class CardProduct extends React.Component {

    addCart = () => {
        var articulos = []
        if (localStorage.getItem('articulo')) // TODO rename 'articulo' to 'cart'
            articulos = JSON.parse(localStorage.getItem('articulo'))

        articulos.push(this.props.product)
        localStorage.setItem('articulo', JSON.stringify(articulos))
    }

    idItem = (id) => {
        this.props.history.push(`/producto/${id}`)
    }

    render() {
        return (
            <div className="product-card">
                <button className="top button-more-information" onClick={e => { e.preventDefault(); this.idItem(this.props.product.ARTICULO) }}>
                    <div>
                        <img className="image-product-card" src={this.props.product.HighPic} alt={this.props.product.SHORTDESC} />
                    </div>
                    <div className="bottom">
                        <p className="primary-details">
                            <span className="product-name">{((this.props.product.SHORTDESC) ? this.props.product.SHORTDESC : this.props.product.DESCRIPCION).substring(0, 50).concat("...")}</span>
                            <span className="product-sku">{this.props.product.ARTICULO}</span>
                        </p>
                        <p className="secondary-details">
                            <span className="product-price-was">{((1.21 * (parseFloat(this.props.product.VENTA) * 1.1)).toFixed(2)) + "€"}</span>
                            <span className="product-price-now">{(parseFloat(this.props.product.VENTA) * 1.1).toFixed(2) + "€"}</span>
                        </p>
                    </div>
                </button>
                <a className="btn-add" onClick={e => { e.preventDefault(); this.addCart() }}>{"Añadir a la cesta"}</a>
            </div>
        )
    }

}

export default withRouter(CardProduct)