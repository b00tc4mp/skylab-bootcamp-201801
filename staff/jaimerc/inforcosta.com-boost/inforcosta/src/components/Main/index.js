import React from 'react'
import Home from '../Home'
import Title from '../Title'
import MenuCategory from '../MenuCategory'
import MenuProducts from '../MenuProducts'
import DescriptionProduct from '../DescriptionProduct'
import { Route } from 'react-router-dom'
import apiClient from '../../apiClient.js'

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            productsPromo: []
        }
    }

    componentWillMount() {
        apiClient.getOffersProducts()
            .then(data => {
                this.setState({ productsPromo: data })
            })
    }



    render() {
        return (
            <div>

                <Route exact path='/' render={() => (
                    <Home productsPromo={this.state.productsPromo}
                    /*
                    [
                        {
                            ofert1: "https://bulma.io/images/placeholders/480x320.png",
                            ofert2: "https://bulma.io/images/placeholders/480x320.png"
                        },
                        {
                            ofert1: "https://bulma.io/images/placeholders/480x320.png",
                            ofert2: "https://bulma.io/images/placeholders/480x320.png"
                        },
                    ]
                    */
                    />
                )} />

                <Route path='/categoria' render={() => (
                    <div>
                        <Title title={"Categorias de Productos"} />

                        <MenuCategory />
                    </div>
                )} />

                <Route path='/subcategoria' render={() => (
                    <div>
                        <Title title={"Subcategoria de Productos"} subTitle={"Categoria de Producto"} />

                        <MenuProducts />
                    </div>
                )} />


                <Route path='/producto' render={() => (
                    <div>
                        <Title title={"Producto"} subTitle={"Subcategoria"} />

                        <DescriptionProduct />
                    </div>
                )} />

            </div>
        )
    }
}

export default Main