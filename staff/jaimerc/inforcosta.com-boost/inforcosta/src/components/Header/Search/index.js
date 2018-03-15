import React from 'react'
import './styles/main.css'

class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            query: ""
        }
    }

    keepInput = (e) => this.setState({ query: e.target.value })

    search() {
        console.log(this.state.query)
        /*
        if (this.state.query)
            this.props.history.push(`/search/${this.state.query}`)
            */
    }

    render() {
        return (
            <form onSubmit={e => { e.preventDefault(); this.search() }}>
                <div clasm="columns is-mobile">
                    <div className="column is-half is-offset-one-quarter">
                        <div className="field is-grouped">
                            <p className="control is-expanded">
                                <input className="input" type="search" placeholder="🔎" onChange={this.keepInput} value={this.state.query} />
                            </p>
                            <p className="control">
                                <button type="submit" className="button is-primary is-outlined" onClick={this.search()}>Busqueda</button>
                            </p>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default Search