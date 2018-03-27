import React from 'react'

function Payment (props) {
        return (
            <div>
                <label className="title is-5">{"Total del Pedido"}</label>

                <table className="table is-striped">
                    <thead className="title is-5">
                        <tr>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="is-4">
                        <tr>
                            <td><strong>{"Importe"}</strong></td>
                            <td>{(parseFloat(props.totalPrice) * 1.1).toFixed(2) + " €"}</td>
                        </tr>
                        <tr>
                            <td><strong>{"Canon"}</strong></td>
                            <td>{(0) + " €"}</td>
                        </tr>
                        <tr>
                            <td><strong>{"I. V. A."}</strong></td>
                            <td>{(parseFloat((props.totalPrice * 1.1 * 1.21) - (props.totalPrice * 1.1))).toFixed(2) + " €"}</td>
                        </tr>
                        <tr>
                            <td><strong>{"Total"}</strong></td>
                            <td>{(parseFloat(props.totalPrice) * 1.1 * 1.21).toFixed(2) + " €"}</td>
                        </tr>
                    </tbody>
                </table>
                <a onClick={e => { e.preventDefault(); props.onToBuy() }} className="button is-dark is-outlined">{"Finalice su pedido"}</a>

            </div>
        )
    }

export default Payment