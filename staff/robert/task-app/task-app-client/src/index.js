require('dotenv').config()

const { taskApi } = require('./task-api-client')
const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')

const app = express()

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    taskApi.getTodoTasks()
        .then((todos) => {
            taskApi.getDoneTasks()
                .then((dones) => {
                    res.render('index', { taskstodo: todos.data.data , tasksdone: dones.data.data})
                })
        })
})

const formBodyParser = bodyParser.urlencoded({ extended: false });

app.post('/tasks', formBodyParser, (req, res) => {
    const text = req.body.text    

    taskApi.createTask(text)
        res.redirect('/')
})

app.get('/tasks/:id', (req, res) => {
    const { id } = req.params

    taskApi.markDone(id)    
        res.redirect('/')

})

app.get('/tasks/delete/:id', (req, res) => {
    const { id } = req.params
    
    taskApi.deleteTask(id)
        res.redirect('/')
})

const port = process.env.PORT

app.listen(port, () => console.log(`Task App Client running on port ${port}`))