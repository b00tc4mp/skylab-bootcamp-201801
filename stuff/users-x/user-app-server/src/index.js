require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
//const { MongoClient } = require('mongodb')
const { User, UserData, UserLogic } = require('user-logic')
const url = require('url')

const users = []
const userLogic = new UserLogic(new UserData(users))

const app = express()

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    const { query: { id } } = req

    res.render('index', { users: userLogic.list(), id })
})

const formBodyParser = bodyParser.urlencoded({ extended: false })

app.post('/register', formBodyParser, (req, res) => {
    const { body: { name, surname, email, username, password } } = req

    userLogic.register(name, surname, email, username, password)

    console.log(users)

    res.redirect('/')
})

app.get('/edit/:id', (req, res) => {
    const { params: { id } } = req

    const user = userLogic.retrieve(id)

    res.redirect(url.format({
        pathname: "/",
        query: { id }
    }))
})

app.post('/save/:id', formBodyParser, (req, res) => {
    const { params: { id } } = req
    const { body: { name, surname, email, username, password } } = req

    userLogic.update(id, username, password, name, surname, email, username, password)

    console.log(users)

    res.redirect('/')
})

const port = process.env.PORT

app.listen(port, () => console.log(`server running on port ${port}`))


