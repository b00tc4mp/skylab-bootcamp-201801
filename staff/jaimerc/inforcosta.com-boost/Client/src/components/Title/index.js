import React from 'react'
import './styles.css'

function Title(props) {
    return (
        <section className="hero is-primary title-supmargin is-bold">
            <div className="hero-body title-margin">
                <div className="container">
                    <h1 className="title">{props.title}</h1>
                    <h2 className="subtitle">{props.subTitle}</h2>
                </div>
            </div>
        </section>
    )
}

export default Title