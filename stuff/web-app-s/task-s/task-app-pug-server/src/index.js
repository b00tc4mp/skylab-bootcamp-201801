require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const taskLogic = require('./taskLogic')

const app = express()


app.set('view engine', 'pug')

app.get('/', (req, res) => {
    //tasks.push({ id: 1, text: 'hola mundo!', done: false})

    res.render('index', { todos: taskLogic.listTodo(), dones: taskLogic.listDone() })
})

const formBodyParser = bodyParser.urlencoded({ extended: false })

app.post('/tasks', formBodyParser, (req, res) => {
    const { body: { text } } = req

    taskLogic.create(text)

    res.redirect('/')
})

app.get('/tasks/:id/done', (req, res) => {
    const {  params: { id } } = req

    taskLogic.markDone(id)

    res.redirect('/')
})

app.get('/tasks/:id/remove', (req, res) => {
    const {  params: { id } } = req

    taskLogic.removeDone(id)

    res.redirect('/')
})

const port = process.env.PORT

app.listen(port, () => console.log(`Task App running on port ${port}`))