import React from 'react'
import Carousel from '../Carousel'
import DescriptionProduct from '../DescriptionProduct'
import { Route, Switch } from 'react-router-dom'
import api from '../../api'
import Results from '../Results/index'
import Cart from '../Cart'

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            productsPromoUp: [],
            productsPromoDown: []

        }
    }

    componentWillMount() {
        api.getOffersProducts()
            .then(res => {
                this.setState({ productsPromoUp: res.data })
            })
        api.getOffersProducts()
            .then(res => {
                this.setState({ productsPromoDown: res.data })
            })
    }

    render() {
        return (

            <Switch>

                <Route exact path='/' render={() => (
                    <Carousel
                        productsPromoUp={this.state.productsPromoUp}
                        productsPromoDown={this.state.productsPromoDown} />
                )} />

                <Route path='/categoria/:category/:idCategory' component={Results} />

                <Route path='/producto/:idProduct' component={DescriptionProduct} />

                <Route path='/search/:query' component={Results} />

                <Route path='/cart/:username' component={Cart} />

                <Route render={() => (
                    <Carousel
                        productsPromoUp={this.state.productsPromoUp}
                        productsPromoDown={this.state.productsPromoDown} />
                )} />

            </Switch>

        )
    }
}

export default Main