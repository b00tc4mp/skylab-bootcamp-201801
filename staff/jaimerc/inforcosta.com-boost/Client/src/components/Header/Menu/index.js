import React from 'react'
import { withRouter } from 'react-router-dom'
import ItemMenuList from './ItemMenuList/index'
import './styles.css'
import api from '../../../api'

class Menu extends React.Component {
    constructor() {
        super()
        this.state = {
            dispositives: [],
            components: [],
            peripherals: [],
            accesories: []
        }
    }

    loadCategories = () => {
        api.getCategory()
            .then(res => {
                const categories = res.data

                const dispositives = categories.filter(category => category.CATEGORIA_ID === 571 || category.CATEGORIA_ID === 150 || category.CATEGORIA_ID === 2834)
                const components = categories.filter(category => category.CATEGORIA_ID === 106 || category.CATEGORIA_ID === 206)
                const peripherals = categories.filter(category => category.CATEGORIA_ID === 220 || category.CATEGORIA_ID === 225 || category.CATEGORIA_ID === 1058 || category.CATEGORIA_ID === 191)
                const accesories = categories.filter(category => category.CATEGORIA_ID === 823 || category.CATEGORIA_ID === 830 || category.CATEGORIA_ID === 2554 || category.CATEGORIA_ID === 4838)

                this.setState({
                    dispositives,
                    components,
                    peripherals,
                    accesories
                })
            })
    }

    componentDidMount() {
        this.loadCategories()
    }

    loadProductByCategory = (category) => {
            this.props.history.push(`/categoria/${category.CATEGORIA}/${category.CATEGORIA_ID}`)
    }

    render() {
        return (
            <div className="columns is-mobile is-multiline is-centered navbar-section-module">

                <ItemMenuList title={"DISPOSITIVOS"} category={this.state.dispositives} onloadProductByCategory={this.loadProductByCategory} />

                <ItemMenuList title={"COMPONENTES"} category={this.state.components} onloadProductByCategory={this.loadProductByCategory} />

                <ItemMenuList title={"PERIFÉRICOS"} category={this.state.peripherals} onloadProductByCategory={this.loadProductByCategory} />

                <ItemMenuList title={"ACCESORIOS"} category={this.state.accesories} onloadProductByCategory={this.loadProductByCategory} />

            </div>
        )
    }
}

const MenuWithRouter = withRouter(Menu)

export default MenuWithRouter