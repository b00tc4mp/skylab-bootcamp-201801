import React from 'react'
import Home from '../Home'
import Title from '../Title'
import MenuCategory from '../MenuCategory'
import DescriptionProduct from '../DescriptionProduct'
import { Route, Switch } from 'react-router-dom'
import apiClient from '../../apiClient.js'
import Results from '../Results/index'
import Carrito from '../Carrito'

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            productsPromo: []
        }
    }

    componentWillMount() {
        console.log()
        apiClient.getOffersProducts()
            .then(data => {
                this.setState({ productsPromo: data.data.data })
            })
    }

    render() {
        return (

            <Switch>

                <Route exact path='/' render={() => (
                    <Home productsPromo={this.state.productsPromo} />
                )} />

                <Route path='/categoria' render={() => (
                    <div>
                        <Title title={"Categorias de Productos"} />

                        <MenuCategory />
                    </div>
                )} />

                <Route path='/producto/:idProduct' component={DescriptionProduct} />

                <Route path='/search/:query' component={Results} />

                <Route path='/carrito/:username' component={Carrito} />

                <Route render={() => (
                    <Home productsPromo={this.state.productsPromo} />
                )} />

            </Switch>

        )
    }
}

export default Main