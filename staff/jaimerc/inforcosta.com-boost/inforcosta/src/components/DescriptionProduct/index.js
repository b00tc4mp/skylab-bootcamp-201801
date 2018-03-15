import React from 'react'
import Description from './Description'
import Image from './Image'
import MoreInfo from './MoreInfo'
import Details from './Details'
import apiClient from '../../apiClient.js'

class DescriptionProduct extends React.Component {
    constructor() {
        super()
        this.state = {
            product: {}
        }
    }

    componentWillMount() {
        apiClient.getProductById(206, 862, "HD33233067")
            .then(data => this.setState({ product: data.data }))
    }

    render() {
        console.log(this.state.product)
        return (
            <div className="tile is-ancestor">
                <div className="tile is-parent is-1" />

                <MoreInfo title={"Marca"} product={this.state.product} />

                <div className="tile is-vertical">

                    <div className="tile">

                        <Image image={this.state.product.HighPic} />

                        <Details title={"Detalles"} product={this.state.product} />

                    </div>

                    <Description title={"Descripcion"} text={this.state.product.DESCRIPCION} />

                </div>
            </div>

        )
    }
}

export default DescriptionProduct