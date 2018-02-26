import React, { Component } from 'react'

import PropTypes from 'prop-types'

export class Article extends Component {
  static propTypes = {
    //Aplicamos PropTypes sobre el author, indicandole que tiene que ser un string.
    //Si no lo fuera, nos devolveria un error en consola.
    author: PropTypes.string.isRequired
  }

  render() { 
    const {author, children, date, title } = this.props
    
    return(
      <section>
        <h2>{title}</h2>
        {author && <p><em>Escrito por {author}</em></p>}
        <div>{date}</div>
        <article>{children}</article>
      </section>
    )
  }
}