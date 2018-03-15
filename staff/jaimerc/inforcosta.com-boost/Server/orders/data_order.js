const Order = require('./module_order')
const Product = require('../products/model_product')

const dataOrder = {

    getTotalOrdersByUser(idUser) {
        return new Promise((resolve, reject) => {
            Order.find({ idUser: parseInt(idUser) })
                .then(orders => {
                    Product.populate(orders, { path: 'products.idProduct' })
                        .then(resolve)
                })
                .catch(reject)
        })
    },

    getOrderById(idUser, idOrder) {
        return new Promise((resolve, reject) => {
            Order.find({ $and: [{ _id: idOrder, idUser: idUser }] })
                .then(resolve)
                .catch(reject)
        })
    },

    setNewOrder(order) {
        return new Promise((resolve, reject) => {
            const _order = new Order(order)
            _order.save()
                .then(resolve)
                .catch(reject)

        })
    }
}

module.exports = dataOrder