import React from 'react'
import './styles.css'

function AlternativeProducts(props) {
    return (
        <div className="tile is-parent is-2">
            <article className="tile is-child box">
                <p className="title is-5">{props.title}</p>
                {props.products.map((item, index) => {
                    if (item !== null) {
                        return (
                            <div className="dropdown is-hoverable container-product" key={index}>
                                <div className="dropdown-trigger container-product">
                                    <button className="button product-alternative-card" aria-haspopup="true" aria-controls="dropdown-menu2" onClick={e => { e.preventDefault(); props.onShowArticle(item.ARTICULO) }}>
                                        <img src={(item.IMAGEN) ? item.IMAGEN : " "} alt={item.SHORTDES} />
                                    </button>
                                </div>
                                <div className="dropdown-menu" id="dropdown-menu2" role="menu">
                                    <div className="dropdown-content">
                                        <div className="dropdown-item">
                                            <p>{item.DESCRIPCION}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    } else {
                        return ""
                    }

                })}
            </article>
        </div>
    )
}

export default AlternativeProducts