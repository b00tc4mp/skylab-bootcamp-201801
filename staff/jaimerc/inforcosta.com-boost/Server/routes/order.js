const logic = require('../logic')
const express = require('express')
const routes = express.Router()
const bodyParser = require('body-parser')
const jsonBodyParser = bodyParser.json()
const passport = require('passport')
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt')


//Listar todos los pedidos segun Usuario
routes.route('/')
    .post(jsonBodyParser, (req, res) => {
        const { body: { idUser } } = req

        logic.getTotalOrdersByUser(idUser)
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
routes.route('/order/:idOrder')
    .post(jsonBodyParser, (req, res) => {
        const { body: { idUser } } = req
        const { params: { idOrder } } = req

        logic.getOrderById(idUser, idOrder)
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
routes.route('/create')
    .post([jsonBodyParser, passport.authenticate('jwt', { session: false })], (req, res) => {
        const { body: { order } } = req
        const { user } = req

        logic.setNewOrder(order, user)
            .then(order => {

                res.json({
                    status: "OK",
                    message: `Se ha creado el pedido ${order._id}`,
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

module.exports = routes