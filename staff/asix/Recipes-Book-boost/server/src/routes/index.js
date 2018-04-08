const express = require('express')
const { listUser, createUser, listRecipe, createRecipe } = require('./handlers')
const bodyParser = require('body-parser')
const jsonBodyParser = bodyParser.json()

const router = express.Router()

router.get('/users', listUser)

router.post('/user', jsonBodyParser, createUser)

router.get('/recipes', listRecipe)

router.post('/recipe', jsonBodyParser, createRecipe)

module.exports = router