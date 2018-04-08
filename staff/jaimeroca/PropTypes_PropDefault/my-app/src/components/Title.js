import React, { Component } from 'react'

export class Title extends Component {
    render () {
      return (
        <div>
          <h2>About defaultProps</h2>
          <p><em>{this.props.text}</em></p>
          <p>Añadiendo la propiedad defaultProps al componente Title, podemos indicar el valor por defecto que tendrán las props. En este caso hacemos que text tenga como valor por defecto el string "Jaime por defecto".</p>
          <p>Esto es muy útil si queréis controlar que una prop tenga un valor aunque al usar el componente alguien no le haya pasado un valor o para simplificar su uso. Se suele hacer también para props que son requeridas y, que en caso que no se pasen, al menos el componente no dé un error.</p>
        </div>
      )
    }
  }
    
  Title.defaultProps = {
    text: 'Jaime por defecto'
  }