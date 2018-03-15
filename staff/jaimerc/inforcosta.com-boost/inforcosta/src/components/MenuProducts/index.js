import React from 'react'
import Filter from './Filter'
import BoxProducts from './BoxProducts'
import apiClient from '../../apiClient.js'

class MenuProducts extends React.Component {
    constructor() {
        super()
        this.state = {
            products: []
        }
    }

    componentWillMount() {
        apiClient.getSubategoryById(this.props.idSubcategory)
            .then(products => this.setState({ products }))
    }

    render() {
        return (
            <div>
                <div className="tile is-ancestor">

                    <Filter />

                    <div className="tile is-parent">

                        <BoxProducts products={this.state.products}/>

                    </div>
                </div>
            </div>
        )
    }

}

export default MenuProducts