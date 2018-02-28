require('dotenv').config()

const express = require('express')

const bodyParser = require('body-parser')

const taskApi = require('./taskapi')

const app = express()


app.set('view engine', 'pug')

app.get('/', (req, res) => {
    
    dones = todos = []

    taskApi.getTasks().then(tasks => {

        const todos = tasks.filter(task => task.status == false)

        const dones = tasks.filter(task => task.status == true)

        res.render('index', {todos, dones})


    })

})

const formBodyParser = bodyParser.urlencoded({ extended: false })

app.post('/tasks', formBodyParser, (req, res) => {
    const { body: { text } } = req

    taskApi.createTask(text); 

    res.redirect('/')
})



app.get('/tasks/:id/done', (req, res) => {
    const {  params: { id } } = req

    // taskLogic.markDone(id)
    taskApi.modifyTask(id)

    res.redirect('/')
})


app.get('/tasks/:id/remove', (req, res) => {
    const {  params: { id } } = req

    taskApi.removeTask(id)

    res.redirect('/')
})


const port = process.env.PORT

app.listen(port, () => console.log(`Task App running on port ${port}`))