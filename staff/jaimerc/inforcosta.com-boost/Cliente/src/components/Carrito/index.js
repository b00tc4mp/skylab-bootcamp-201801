import React from 'react'
import './styles/main.css'
import apiClient from '../../apiClient'
import Title from '../Title'
import InfoPersonal from './InformationPersonal'
import History from './History'
import Payment from './Payment'
import Order from './Order'

class Carrito extends React.Component { // TODO rename Carrito to Cart
    constructor() {
        super()
        this.state = {
            user: {},
            products: []
        }
    }

    loadUser() {
        console.log("hoal")
        
        const token = localStorage.getItem('token')

        apiClient.getUser(token)
            .then(user => {
                console.log(user)

                this.setState({ user: user.data.data })
            })
    }

    loadCart() {
        if (localStorage.getItem('articulo')) {
            const newProducts = JSON.parse(localStorage.getItem('articulo'))
            this.setState({ products: newProducts })
        }
    }

    deleteProduct = (idArticulo) => {
        const newProducts = JSON.parse(localStorage.getItem('articulo'))
        const index = newProducts.map(item => item.ARTICULO).indexOf(idArticulo)
        newProducts.splice(index, 1)
        localStorage.setItem('articulo', JSON.stringify(newProducts))
        this.setState({ products: newProducts })
    }


    componentDidMount() {
        this.loadUser()
        this.loadCart()
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

                            <Order products={this.state.products} onDeleteProduct={this.deleteProduct} />

                        </div>
                    </div>
                    <div className="tile is-2 is-parent">
                        <div className="tile is-child box">

                            <Payment />

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Carrito