require('dotenv').config()

const taskApi = require('./taskApi')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
app.set('view engine', 'pug')

const formBodyParser = bodyParser.urlencoded({ extended: false })
let index = 0

app.get('/', (req, res) => {
    let done = []
    let todo = []
    taskApi.getTaskList()
        .then(data => {
            if (typeof data === "string") {
                const message = data
                res.render('form', { message, todo, done })
            } else {
                const tasks = data
                done = tasks.filter(task => task.done === true)
                todo = tasks.filter(task => task.done === false)
                res.render('form', { tasks, todo, done })
            }
        })
})

app.post('/add', formBodyParser, (req, res) => {
    const task = {
        id: index.toString(),
        text: req.body.task,
        done: false
    }
    taskApi.setTask(task)
    index++
    res.redirect('/')
})

app.get('/done/:id', (req, res) => {
    taskApi.setTaskDone(req.params.id)
    res.redirect('/')
})

app.get('/delete/:id', (req, res) => {
    taskApi.setTaskDelete(req.params.id)
    res.redirect('/')
})

const port = process.env.PORT

app.listen(port, () => console.log(`Server running on port ${port}`))