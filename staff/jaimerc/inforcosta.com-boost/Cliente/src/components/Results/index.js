import React from 'react'
import Filter from './Filter'
import apiClient from '../../apiClient.js'
import CardProduct from './CardProduct'
import Title from '../Title'
import './styles/main.css'

class Results extends React.Component {
    constructor() {
        super()
        this.state = {
            query: "",
            products: [],
            filterBrand: "Marca / Fabricante",
            brand: [],
            filterPrice: "Precio",
            family: [],
            filterFamily: "Familia",
            price: [{ name: "Ascendente", value: 1 }, { name: "Descendente", value: 2 }],
            productsFiltered: [],
            message: ""
        }
    }

    loadSearch = (query) => {

        apiClient.getProductBySearch(query)
            .then(data => {
                if (data.data.status === "OK") {

                    const brand = data.data.data.map(item => item.MARCA)
                    const itemsBrand = Array.from(new Set(brand)).sort()

                    const family = data.data.data.map(item => item.SUBCATEGORIA)
                    const itemsFamily = Array.from(new Set(family)).sort()

                    this.setState({
                        products: data.data.data,
                        brand: itemsBrand,
                        family: itemsFamily,
                        message: "",
                        query: query
                    })
                } else {
                    this.setState({
                        products: [],
                        message: "No hay productos",
                        query: query
                    })
                }
            })
    }

    componentDidMount() {
        this.loadSearch(this.props.match.params.query)
    }

    componentWillReceiveProps(props) {
        this.loadSearch(props.match.params.query)
    }


    filterBrand = (event) => {
        let filter = event.target.value

        const productBrand = this.state.products.filter(item => (item.MARCA.toLowerCase() === filter.toLowerCase()))

        this.setState({ productsFiltered: (productBrand.length > 0) ? productBrand : [] })
    }

    filterPrice = (event) => {

        let filter = parseInt(event.target.value)

        const { products, productsFiltered } = this.state

        const productPrice = (productsFiltered.length > 0) ? productsFiltered : products
        let result = []

        switch (filter) {
            case 0:
                result = []
                break
            case 1:
                result = productPrice.sort((a, b) => a.VENTA - b.VENTA)

                break
            case 2:
                result = productPrice.sort((a, b) => b.VENTA - a.VENTA)

                break
            default:
                result = []
        }
        this.setState({ productsFiltered: (result.length > 0) ? result : [] })
    }

    filterFamily = (event) => {
        let filter = event.target.value

        const productFamily = this.state.products.filter(item => (item.SUBCATEGORIA.toLowerCase() === filter.toLowerCase()))

        this.setState({ productsFiltered: (productFamily.length > 0) ? productFamily : [] })

    }
    render() {
        let items = (this.state.productsFiltered.length > 0) ? this.state.productsFiltered : this.state.products
        return (
            <div>

                <Title title={`Artículos relacionados con la búsqueda "${this.state.query.toUpperCase()}"`} />

                <div className="tile is-ancestor block-products" >
                    <Filter
                        family={this.state.family}
                        filterFamily={this.state.filterFamily}
                        onFilterFamily={this.filterFamily}

                        brand={this.state.brand}
                        filterBrand={this.state.filterBrand}
                        onFilterBrand={this.filterBrand}

                        price={this.state.price}
                        filterPrice={this.state.filterPrice}
                        onFilterPrice={this.filterPrice}
                    />

                    <div className="tile is-parent">
                        <div className="tile is-child box">
                            <h1>{this.state.message}</h1>

                            <div className="columns is-multiline">
                                {items.map(item => {
                                    return (
                                        <div className="column is-one-quarter" key={item.article}>

                                            <CardProduct product={item} />

                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

}

export default Results