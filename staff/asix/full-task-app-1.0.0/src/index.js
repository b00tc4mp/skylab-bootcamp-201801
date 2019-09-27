require('dotenv').config()

// const axios = require('axios')
const express = require ('express')
const app = express()
const axiosCall = require ('./axios.js')

const bodyParser = require ('body-parser')
const formBodyParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'pug')

app.get('/', (req, res) => {

    axiosCall.list(res)
})

app.post('/add', formBodyParser, (req, res) => {
    const {text} = req.body

    axiosCall.create(res, text)
})

app.get('/done/:id', (req, res) => {
    const { id } = req.params

    axiosCall.edit(res, id)
})

app.get('/delete/:id', (req, res) => {
    const { id } = req.params

    axiosCall.delete(res, id)
})

const port = process.env.PORT

app.listen(port, () => console.log(`PUG running on port ${port}`))