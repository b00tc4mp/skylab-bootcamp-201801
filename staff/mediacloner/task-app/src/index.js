require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const taskAPI = require('./taskAPI')

const app = express()


app.set('view engine', 'pug')

app.get('/', (req, res) => {
    taskAPI.listTodo().then(todos => {
       taskAPI.listDone().then(dones => {
           res.render('index', { todos, dones })      
       })
   })
})

const formBodyParser = bodyParser.urlencoded({ extended: false })

app.post('/tasks', formBodyParser, (req, res) => {
    const { body: { text } } = req

    taskAPI.create(text).then( res.redirect('/'))
})

app.get('/tasks/:id/done', (req, res) => {
    const {  params: { id } } = req

    taskAPI.markDone(id)

    res.redirect('/')
})

app.get('/tasks/:id/remove', (req, res) => {
    const {  params: { id } } = req

    taskAPI.removeDone(id)

    res.redirect('/')
})

const port = process.env.PORT

app.listen(port, () => console.log(`Task App running on port ${port}`))