const { Router } = require('express')

const {redirect, getAllTasks, createTask, markDoneTask, deleteTask} = require('../controller/taskApp')

app.get('/', [getAllTasks])

app.post('/tasks',[formBodyParser, createTask, redirect])

app.get('/tasks/:id/done', [markDoneTask ,redirect])

app.get('/tasks/:id/remove', [deleteTask, redirect])