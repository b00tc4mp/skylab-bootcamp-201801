import React from 'react'
import './styles.css'
import withRouter from 'react-router-dom/withRouter'
import Slider from 'react-slick'
import '../../../node_modules/slick-carousel/slick/slick.css'
import '../../../node_modules/slick-carousel/slick/slick-theme.css'

class Carousel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            settings: {},
            nav1: null,
            nav2: null
        }
    }

    loadProduct = (idArticle) => {
        this.props.history.push(`/producto/${idArticle}`)
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2,
            settingsUp: {
                dots: false,
                infinite: true,
                vertical: false,
                speed: 2000,
                autoplay: true,
                autoplaySpeed: 3000,
                responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                }]
            },
            settingsDown: {
                dots: true,
                infinite: true,
                vertical: false,
                speed: 2000,
                autoplay: true,
                autoplaySpeed: 3000,
                responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                }]
            }
        })
    }

    render() {
        return (
            <div className="columns navbar-section-buttons">

                <div className="column is-three-fifths is-offset-one-fifth">
                    <Slider {...this.state.settingsUp}
                        asNavFor={this.state.nav2}
                        ref={slider => this.slider1 = slider}
                        slidesToShow={2} >
                        {this.props.productsPromoUp.map((item,index) => {
                            return (
                                <div key={index}>
                                    <button className="button-more-information-home" onClick={e => { e.preventDefault(); this.loadProduct(item.ARTICULO) }} >
                                        <img className="image-ofert" src={item.HighPic} alt={item.DESCRIPTION} />
                                    </button>
                                </div>
                            )
                        })}
                    </Slider>

                    <Slider {...this.state.settingsDown}
                        asNavFor={this.state.nav1}
                        ref={slider => this.slider2 = slider}
                        slidesToShow={2}>
                        {this.props.productsPromoDown.map((item,index) => {
                            return (
                                    <div key={index}>
                                        <button className="button-more-information-home" onClick={e => { e.preventDefault(); this.loadProduct(item.ARTICULO) }}>
                                            <img className="image-ofert" src={item.HighPic} alt={item.DESCRIPTION} />
                                        </button>
                                    </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>
        );
    }

}


export default withRouter(Carousel)
