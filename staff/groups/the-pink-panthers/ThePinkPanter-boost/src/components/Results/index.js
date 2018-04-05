import React from 'react'
import pinkPanterApi from '../../pinkPanterApi';
import Card from '../Card';
import Pagination from "react-js-pagination";

class Results extends React.Component {
    constructor() {
        super()
        this.state = {
            search: [],
            activePage: 1
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    loadSearch(query, page) {
        pinkPanterApi.getSearch(query, page, this.props.lang)
            .then(search => this.setState({ search }))
    }

    componentWillMount() {
        this.setState({ activePage: 1 })
        this.loadSearch(this.props.match.params.query, 1)
    }

    componentWillReceiveProps(props) {
        this.setState({ activePage: 1 })
        this.loadSearch(props.match.params.query, 1)
    }

    handlePageChange = (pageNumber) => {
        this.setState({ activePage: pageNumber })
        this.loadSearch(this.props.match.params.query, pageNumber)
    }

    render() {
        return (
            <div>
                <h1>{this.props.match.params.query}</h1>
                <div className='container'>
                    <div className='card-deck'>
                        {this.state.search.map(item => {
                            return (
                                <Card item={item} type={item.media_type} key={item.id}/>
                            )
                        })}
                    </div>
                </div>

                <div>
                    <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={10}
                        totalItemsCount={450}
                        onChange={this.handlePageChange}
                    />
                </div>
            </div>
        )
    }
}

export default Results