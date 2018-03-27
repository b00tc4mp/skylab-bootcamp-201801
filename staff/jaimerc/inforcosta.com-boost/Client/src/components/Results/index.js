import React from 'react'
import Filter from './Filter'
import api from '../../api'
import CardProduct from './CardProduct'
import Title from '../Title'
import './styles.css'

class Results extends React.Component {
    constructor() {
        super()
        this.state = {
            query: "",
            category: "",
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
        api.getProductBySearch(query)
            .then(res => {
                if (res.status === "OK") {

                    const brand = res.data.map(item => item.MARCA)
                    const itemsBrand = Array.from(new Set(brand)).sort()

                    const family = res.data.map(item => item.SUBCATEGORIA)
                    const itemsFamily = Array.from(new Set(family)).sort()

                    this.setState({
                        products: res.data,
                        brand: itemsBrand,
                        family: itemsFamily,
                        message: "",
                        query: query
                    })

                } else {
                    this.setState({
                        products: [],
                        message: "No se han encontrados productos disponibles.",
                        query: query
                    })
                }
            })
    }

    loadProductByCategory(category) {
        api.getProductByCategory(category)
            .then(res => {
                if (res.status === "OK") {

                    const brand = res.data.map(item => item.MARCA)
                    const itemsBrand = Array.from(new Set(brand)).sort()

                    const family = res.data.map(item => item.SUBCATEGORIA)
                    const itemsFamily = Array.from(new Set(family)).sort()

                    this.setState({
                        products: res.data,
                        brand: itemsBrand,
                        family: itemsFamily,
                        message: "",
                        query: ""
                    })
                } else {
                    this.setState({
                        products: [],
                        message: "No se han encontrados productos disponibles.",
                        category: res.CATEGORIA
                    })
                }
            })
    }

    componentDidMount() {
        if (this.props.match.params.query) {
            const { params: { query } } = this.props.match

            this.loadSearch(query)

        } else if (this.props.match.params.idCategory) {
            const { params: { category, idCategory } } = this.props.match

            this.setState({ category })
            this.loadProductByCategory(idCategory)
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.query) {
            const { params: { query } } = nextProps.match

            this.loadSearch(query)
            
        } else if (nextProps.match.params.idCategory) {
            const { params: { category, idCategory } } = nextProps.match

            this.setState({ category })
            this.loadProductByCategory(idCategory)
        }
    }


    filterBrand = (event) => {
        let filter = event.target.value

        const productBrand = this.state.products.filter(item => (item.MARCA.toLowerCase() === filter.toLowerCase()))

        this.setState({ productsFiltered: (productBrand.length > 0) ? productBrand : [] })
    }

    filterPrice = (event) => {

        let filter = event.target.value

        const { products, productsFiltered } = this.state

        const productPrice = (productsFiltered.length > 0) ? productsFiltered : products
        let result = []

        switch (filter) {
            case "0":
                result = []
                break
            case "1":
                result = productPrice.sort((a, b) => a.VENTA - b.VENTA)

                break
            case "2":
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

                <Title title={(this.state.query) ? `Artículos relacionados con la búsqueda "${this.state.query.toUpperCase()}"` : `Productos de la Categoría "${this.state.category}"`} />

                <div className="tile is-ancestor block-products" >
                    <Filter
                        titleFilter={"Filtros"}
                        family={this.state.family}
                        filterFamily={this.state.filterFamily}
                        onFilterFamily={this.filterFamily}

                        brand={this.state.brand}
                        filterBrand={this.state.filterBrand}
                        onFilterBrand={this.filterBrand}

                        titleOrdenation={"Ordenación"}
                        price={this.state.price}
                        filterPrice={this.state.filterPrice}
                        onFilterPrice={this.filterPrice}
                    />

                    <div className="tile is-parent">
                        <div className="tile is-child box">
                            <label className="title">{this.state.message}</label>

                            <div className="columns is-multiline">
                                {items.map((item,index)=> {
                                    return (
                                        <div className="column is-one-quarter" key={index}>

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