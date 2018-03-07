const { Router } = require('express')
const bodyParser = require('body-parser')
const { list, create, update, delete: _delete, retrieve } = require('./handlers')

const router = Router()

router.get('/users', list)

const jsonBodyParser = bodyParser.json()

router.post('/user', jsonBodyParser, create)

router.put('/user/:id', jsonBodyParser, update)

router.delete('/user/:id', jsonBodyParser, _delete)

router.get('/user/:id', retrieve)

module.exports = router