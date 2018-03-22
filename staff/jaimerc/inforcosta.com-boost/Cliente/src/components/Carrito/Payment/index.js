import React from 'react'
import './styles/main.css'

class Payment extends React.Component {
    constructor() {
        super()
        this.state = {
            payment: {}
        }
    }

    render() {
        return (
            <label class="title is-5">Metodo de Pago</label>
        )
    }
}

export default Payment