import React from 'react'
import { withRouter } from 'react-router-dom'
import './styles/main.css'
import Input from '../../Input'

class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            query: ""
        }
    }

    onClick = () => {
        if (this.refs.query.getValue())
            this.setState({ query: this.refs.query.getValue() })
    }

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
                                <Input ref={"query"} classInput={"input"} typeInput={"search"} placeholderInput={"🔎"} />
                            </div>
                            <div className="control">
                                <button type="submit" className="button is-primary is-outlined" onClick={this.onClick}><strong>Busqueda</strong></button>
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