import React from 'react'

class History extends React.Component {
    constructor() {
        super()
        this.state = {
            orders: []
        }
    }

    render() {
        return (
            <div>
            </div>
        )
        /*
        return (
            <div>
                <label className="title is-5">Historial</label>

                <div className="dropdown is-up is-hoverable">
                    <div className="dropdown-trigger">
                        <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                            <span>{"Tus Pedidos"}</span>
                            <span className="icon is-small">
                                <i className="fas fa-angle-down" aria-hidden="true"></i>
                            </span>
                        </button>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                            <a href="" className="dropdown-item">
                                Dropdown item
 </a>
                            <a className="dropdown-item">
                                Other dropdown item
 </a>
                            <a href="" className="dropdown-item">
                                Active dropdown item
 </a>
                            <a href="" className="dropdown-item">
                                Other dropdown item
 </a>
                            <hr className="dropdown-divider" />
                            <a href="" className="dropdown-item">
                                With a divider
 </a>
                        </div>
                    </div>
                </div>
            </div>

        )
         */
    }
}

export default History
