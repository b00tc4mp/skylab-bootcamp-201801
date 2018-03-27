import React from 'react'
import './styles.css'
import { withRouter } from 'react-router-dom'
import api from '../../api'
import Title from '../Title'
import InfoPersonal from './InformationPersonal'
import History from './History'
import Payment from './Payment'
import Order from './Order'

class Cart extends React.Component {
    constructor() {
        super()
        this.state = {
            user: {},
            products: [],
            totalPrice: ""
        }
    }

    toBuy = () => {
        const user = this.state.user
        const products = this.state.products.map(product => {
            return {
                idProduct: product._id,
                price: product.VENTA,
                unit: product.units
            }
        })

        const order = {
            idUser: user.username,
            products: products,
            paymentMethod: {
                Method: "Pagado",
                status: true
            },
            purchase: {
                status: "En proceso",
                deliveryDate: new Date()
            },
            date: new Date()

        }

        api.setOrderByUser(order, sessionStorage.getItem('token'))
            .then(order => {
                if (order.status === 'OK') {
                    console.log('pedido confirmado')
                } else {
                    console.log('error al grabar el pedido')
                }
            })
    }

    loadUser = () => {
        api.getUser(sessionStorage.getItem('token'))
            .then(user => {
                this.setState({ user: user.data })
            })
    }

    loadCart = () => {
        if (localStorage.getItem('cart')) {
            const newProducts = JSON.parse(localStorage.getItem('cart'))
            newProducts.forEach(product => product.units = 1)
            this.setState({ products: newProducts })
        }
    }

    loadPriceByUnits = (e, idArticle) => {
        let units = e.target.value
        const index = this.state.products.findIndex(product => product.ARTICULO === idArticle)
        const products = this.state.products
        products[index].units = units
        this.setState({ products })
        this.loadTotalPrice()
    }

    loadTotalPrice = () => {
        const totalPrice = this.state.products.map(product => {
            (product.units > 0) ? product.TOTAL = product.VENTA * product.units : product.TOTAL = product.VENTA
            return product.TOTAL
        }).reduce((prev, cur) => prev + cur, 0)

        this.setState({ totalPrice })
    }

    deleteProduct = (idArticulo) => {
        const newProducts = JSON.parse(localStorage.getItem('cart'))
        const index = newProducts.map(item => item.ARTICULO).indexOf(idArticulo)
        newProducts.splice(index, 1)
        localStorage.setItem('cart', JSON.stringify(newProducts))
        new Promise((resolve, reject) => {
            this.setState({ products: newProducts })
        })
            .then(() => this.loadTotalPrice())
    }

    showArticle = (id) => {
        this.props.history.push(`/producto/${id}`)
    }

    componentWillMount() {
        this.loadCart()
        this.loadUser()
    }
    componentDidMount() {
        this.loadTotalPrice()
        this.loadUser()
    }

    render() {
        return (
            <div>
                <Title title={`Bienvenido ${this.state.user.username}`} />

                <div className="tile is-ancestor block-carrito">
                    <div className="tile is-parent is-1" />
                    <div className="tile is-2 is-vertical is-parent">
                        <div className="tile is-child box">

                            <InfoPersonal user={this.state.user} />

                        </div>
                        <div className="tile is-child box">

                            <History />

                        </div>
                    </div>
                    <div className="tile is-6 is-parent">
                        <div className="tile is-child box">

                            <Order
                                products={this.state.products}
                                onShowArticle={this.showArticle}
                                onDeleteProduct={this.deleteProduct}
                                onCountProduct={this.countProduct}
                                onLoadPriceByUnits={this.loadPriceByUnits}
                            />
                        </div>
                    </div>
                    <div className="tile is-2 is-parent">
                        <div className="tile is-child box">

                            <Payment
                                totalPrice={this.state.totalPrice}
                                onToBuy={this.toBuy} />

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Cart)