import React from 'react'
import Title from '../Title'
import Description from './Description'
import Image from './Image'
import AlternativeProducts from './AlternativesProducts'
import Details from './Details'
import api from 'api'
import './styles.css'

class DescriptionProduct extends React.Component {
    constructor() {
        super()
        this.state = {
            product: {},
            alternativeProduct: []
        }
    }

    loardArticle = (id) => {
        api.getProductById(id)
            .then(res => {
                this.setState({ product: res.data })

                return api.getAlternativesProducts(res.data.SUBCATEGORIA_ID)
            })
            .then(res => {
                this.setState({ alternativeProduct: res.data })
            })
    }

    componentDidMount() {
        this.loardArticle(this.props.match.params.idProduct)
    }

    render() {
        return (
            <div>
                <Title title={this.state.product.SUBCATEGORIA} subTitle={this.state.product.CATEGORIA} />

                <div className="tile is-ancestor block-description">
                    <div className="tile is-parent is-1" />

                    <AlternativeProducts title={"Productos alternativos"} products={this.state.alternativeProduct} onShowArticle={this.loardArticle} />

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
