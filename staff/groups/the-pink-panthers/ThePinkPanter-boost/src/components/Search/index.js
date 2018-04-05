import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import './main.css'

class Search extends Component {
    constructor() {
        super();
        this.state = {
            query: ''
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    keepInput = (e) => this.setState({ query: e.target.value })

    search() {
        if (this.state.query)
            this.props.history.push(`/search/${this.state.query}`)
    }

    render() {
        return <div>
            <form className="form-inline" onSubmit={e => { e.preventDefault(); this.search() }}>
                <input className="form-control mr-sm-2" type="search" placeholder={this.props.lang == 'es'? 'Buscar' : 'Search'} aria-label="Search" onChange={this.keepInput} value={this.state.query}/>
                <button id="Find" className="btn btn-outline-success my-2 my-sm-0" type="submit">{this.props.lang == 'es'? 'Buscar' : 'Search'}</button>
            </form>
        </div>
    }
    
}

const SearchWithRouter = withRouter(Search)

export default SearchWithRouter