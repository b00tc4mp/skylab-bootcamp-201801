
const express = require('express')
const logic = require('../logic')
const bodyParser = require('body-parser')

const routes = express.Router()
const jsonBodyParser = bodyParser.json()

routes.get('/:idUser/following', (req, res) => {
    const { params: { idUser } } = req
    
    logic.getUserFollowing(idUser)
        .then((data) => {
            return res.json(data)
        })

})

routes.get('/:idUser', (req, res) => {
    const { params: { idUser } } = req

    logic.getUser(idUser)
        .then((data) => {
            return res.json(data)
        })
})

module.exports = routes