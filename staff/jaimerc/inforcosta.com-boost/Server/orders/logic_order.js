const dataOrder = require('./data_order')
const dataProduct = require('../products/data_product')

const logicOrder = {

    getTotalOrdersByUser(idUser) {
        validate(idUser)

        return dataOrder.getTotalOrdersByUser(idUser)
            .then(data => {
                if (data.length <= 0)
                    throw Error('No hay pedidos registrados.')

                return data
            })
    },

    getOrderById(idUser, idOrder) {
        validate(idOrder)
        validate(idUser)

        return dataOrder.getOrderById(idUser, idOrder)
            .then(data => {
                if (data.length <= 0)
                    throw Error('No hay pedidos registrados.')

                return data[0]
            })
    },

    setNewOrder(_idUser, _products) {

        const order = {
            idUser: _idUser,
            products: _products,
            paymentMethod: {
                method: "Confirm",
                status: true
            },
            purchase: {
                status: "En proceso",
                deliveryDate: new Date()
            },
            date: new Date(),
            //totalPrice: totalPrice(_products)
        }

        return dataOrder.setNewOrder(order)
    }

}


function validate(data) {
    if (typeof data === 'undefined' || !data.trim().length)
        throw Error(`${data} no puede ser indefinido o en blanco`)
}

function totalPrice(data) {
    let total = 0
    for (var i = 0; i < data.length; i++) {
        total += (data[i].price * data[i].unit)
    }
    return total
}

module.exports = logicOrder
