require('dotenv').config()

const express = require('express')

const bodyParser = require('body-parser')

const {redirect, getAllTasks, createTask, markDoneTask, deleteTask} = require('./controller/taskApp')

const app = express()

const formBodyParser = bodyParser.urlencoded({extended: false})

app.set('view engine', 'pug')

app.get('/', [getAllTasks])

app.post('/tasks',[formBodyParser, createTask, redirect])

app.get('/tasks/:id/done', [markDoneTask ,redirect])

app.get('/tasks/:id/remove', [deleteTask, redirect])

//=================  🔥  =================\\
const port = process.env.PORT
app.listen(port, () => console.log(`Task App running on port ${port}`))