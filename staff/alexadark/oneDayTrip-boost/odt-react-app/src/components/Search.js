import React from 'react';


const Search = () => (
    <div className="search">
        <form data-uk-grid>
            <div className="uk-width-1-3" >
                <input type="text"
                       className="uk-input"
                       placeholder="Leaving from..."/>
            </div>
            <div className="uk-width-1-3">
                <input type="text"
                       className="uk-input" placeholder="Dates"/>
            </div>
            <div className="uk-width-1-6">
                <input type="submit"
                       className="uk-button uk-button-primary" value="Submit"/>
            </div>


        </form>

    </div>
);

export default Search;