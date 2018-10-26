import React from 'react'
import './css/main.css'

function SearchLeague(props){
    return(
        <div className="search-box">
            <form className="search-form">
                <input className="form-control" placeholder="Search for your league" type="text" onChange = {props.inputQuery}/>
                <button className="btn btn-link search-btn" onClick = {props.searchLeaguesCity}>
                    <i className="glyphicon glyphicon-search" />
                </button>
            </form>
        </div>
    )
}
export default SearchLeague