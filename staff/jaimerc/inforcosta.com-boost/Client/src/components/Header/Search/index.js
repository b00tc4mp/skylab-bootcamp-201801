import React from 'react'
import { withRouter } from 'react-router-dom'

class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            query: ""
        }
    }

    keepInput = (e) => this.setState({ query: e.target.value })

    search() {
        if (this.state.query)
            this.props.history.push(`/search/${this.state.query}`)
    }

    render() {
        return (
            <form onSubmit={e => { e.preventDefault(); this.search() }}>
                <div className="columns is-mobile">
                    <div className="column is-half is-offset-one-quarter">
                        <div className="field is-grouped">
                            <div className="control is-expanded">
                                <input type="search" className="input" placeholder="🔎" onChange={this.keepInput} value={this.state.query} />
                            </div>
                            <div className="control">
                                <button type="submit" className="button is-primary is-outlined"><strong>Busqueda</strong></button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

const SearchWithRouter = withRouter(Search)

export default SearchWithRouter