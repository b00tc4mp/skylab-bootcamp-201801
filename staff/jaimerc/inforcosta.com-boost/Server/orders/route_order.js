const logicOrder = require('./logic_order')
const express = require('express')
const orderRoute = express.Router()
const bodyParser = require('body-parser')
const jsonBodyParser = bodyParser.json()


//Listar todos los pedidos segun Usuario
orderRoute.route('/')
    .post(jsonBodyParser, (req, res) => {
        const { body: { idUser } } = req

        logicOrder.getTotalOrdersByUser(idUser)
            .then(orders => {
                res.json({
                    status: "OK",
                    message: "Listados de todos los pedidos",
                    data: orders
                })
            })
            .catch(err => {
                res.json({
                    status: "KO",
                    message: err.message
                })
            })
    })

//Listar todos los productos segun Usuario
orderRoute.route('/order/:idOrder')
    .post(jsonBodyParser, (req, res) => {
        const { body: { idUser } } = req
        const { params: { idOrder } } = req

        logicOrder.getOrderById(idUser, idOrder)
            .then(order => {
                res.json({
                    status: "OK",
                    message: `Pedido con ref. ${order._id}`,
                    data: order
                })
            })
            .catch(err => {
                res.json({
                    status: "KO",
                    message: err.message
                })
            })
    })

//Crear un pedido de un Usuario
orderRoute.route('/create')
    .post(jsonBodyParser, (req, res) => {
        const { body: { idUser } } = req
        const { body: { products } } = req

        logicOrder.setNewOrder(idUser, products)
            .then(order => {
                res.json({
                    status: "OK",
                    message: `Se ha creado el pedido ${order.data._id}`,
                    data: order
                })
            })
            .catch(err => {
                res.json({
                    status: "KO",
                    message: err.message
                })
            })
    })

module.exports = orderRoute