const logicUser = require('./logic_user')
const express = require('express')
const userRoute = express.Router()
const bodyParser = require('body-parser')
const jsonBodyParser = bodyParser.json()

userRoute.route('/create')
    .post(jsonBodyParser, (req, res) => {
        const { body: { name, lastName, address1, address2, telf, email, nif, username, password } } = req

        logicUser.setNewUser(name, lastName, address1, address2, telf, email, nif, username, password)
            .then(user => {
                res.json({
                    status: "OK",
                    message: `Usuario ${username} creado`,
                    data: user
                })
            })
            .catch(err => {
                res.json({
                    status: "KO",
                    message: err.message
                })
            })
    })

userRoute.route('/validate')
    .post(jsonBodyParser, (req, res) => {
        const { body: { username, password } } = req

        logicUser.getValidate(username, password)
            .then(user => {
                res.json({
                    status: "OK",
                    message: `Usuario ${username} validado`,
                    data: user
                })
            })
            .catch(err => {
                res.json({
                    status: "KO",
                    message: err.message
                })
            })
    })

userRoute.route('/update')
    .post(jsonBodyParser, (req, res) => {
        const { body: { name, lastName, address1, address2, telf, email, username, password } } = req

        Logic.setUpdateDataUser(name, lastName, address1, address2, telf, email, username, password)
            .then(user => {
                res.json({
                    status: "OK",
                    message: `Usuario ${username} se ha modificado correctamente`,
                    data: user
                })
            })
            .catch(err => {
                res.json({
                    status: "KO",
                    message: err.message
                })
            })
    })

module.exports = userRoute