import React from 'react'
import './styles/main.css'

function ItemMenuList(props) {
    return (
        <div className="column is-one-fifth is-narrow navbar-subsection-button dropdown is-hoverable">
            <div className="dropdown-trigger">
                <span>{props.title}</span>
            </div>
            <div className="dropdown-menu navbar-subsection-dropdrown" id="dropdown-menu3" role="menu">
                <div className="dropdown-content">
                    {props.category.map(item => {
                        return (<a href="/" className="dropdown-item navbar-subsection-itemDropdown" key={item}>
                            {item}
                        </a>)
                    })}
                </div>
            </div>
        </div>
    )
}

export default ItemMenuList