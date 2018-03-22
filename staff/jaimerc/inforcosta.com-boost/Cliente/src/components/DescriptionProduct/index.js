import React from 'react'
import Title from '../Title'
import Description from './Description'
import Image from './Image'
import MoreInfo from './MoreInfo'
import Details from './Details'
import apiClient from '../../apiClient.js'
import './styles/main.css'

class DescriptionProduct extends React.Component {
    constructor() {
        super()
        this.state = {
            product: {}
        }
    }

    componentDidMount() {
        apiClient.getProductById(this.props.match.params.idProduct)
            .then(data => this.setState({ product: data.data.data }))
    }


    render() {
        return (
            <div>
                <Title title={this.state.product.SUBCATEGORIA} subTitle={this.state.product.CATEGORIA} />

                <div className="tile is-ancestor block-description">
                    <div className="tile is-parent is-1" />

                    <MoreInfo title={"Marca"} product={this.state.product} />

                    <div className="tile is-vertical">

                        <div className="tile">

                            <Image image={this.state.product.HighPic} />

                            <Details title={"Detalles"} product={this.state.product}/>

                        </div>

                        <Description title={"Descripcion"} text={this.state.product.DESCRIPCION} text1={this.state.product.SHORTDESC} />

                    </div>
                </div>
            </div>

        )
    }
}

export default DescriptionProduct