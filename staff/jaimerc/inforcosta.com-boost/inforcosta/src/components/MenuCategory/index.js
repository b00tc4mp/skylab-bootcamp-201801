import React from 'react'
import CardSubCategory from './CardSubCategory/index'
import './styles/main.css'
import apiClient from '../../apiClient.js'

class MenuCategory extends React.Component {
    constructor() {
        super()
        this.state = {
            category: []
        }
    }

    componentWillMount() {
        apiClient.getCategory()
            .then(data => {
                this.setState({ category: data.data })
            })
    }

    showCategory = (id) => {

    }

    render() {
        console.log(this.state.category)
        return (
            <div className="container">
                <div className="notification box-card">
                    <div className="columns">
                        {this.state.category.map(item => {
                            return (<div className="column">
                                <CardSubCategory
                                    subCategory={item.CATEGORIA}
                                    imageSubCategory={item.IMAGE}
                                    id={item.CATEGORIA_ID}
                                    onShowCategory={this.showCategory} />
                            </div>)
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default MenuCategory