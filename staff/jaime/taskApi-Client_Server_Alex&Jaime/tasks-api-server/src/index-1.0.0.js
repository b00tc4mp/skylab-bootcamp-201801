/**
 * TASK API
 * 
 * @version 1.0.0
 * 
 */

require('dotenv').config()

const express = require('express')

const bodyParser = require('body-parser')

const jsonBodyParser = bodyParser.json()

const app = express()

let tasks = []

// Listar Tareas
app.get('/api/show/tasks', (req, res) => {
    res.json(tasks)
})

// Crear Tarea
app.post('/api/create/task', jsonBodyParser, (req, res) => {

    const taskExist = tasks.some(task => task.id === req.body.id)

    if (taskExist) {
        res.end("Ya existe la tarea")

    } else {
        const task = {
            id: req.body.id,
            text: req.body.text,
            done: req.body.done,
            username: req.body.username
        }
        tasks.push(task)

        res.json(task)
    }
})

// Modificar una tarea
app.put('/api/update/task/:id', jsonBodyParser, (req, res) => {
    const id = req.params.id
    const text = req.body.text

    const index = tasks.findIndex(task => task.id === id)

    if (index < 0) {
        res.json('La tarea no existe')
    } else {
        tasks[index].text = text
        res.json(tasks[index])
    }
})

// Eliminar una tarea
app.delete('/api/delete/task/:id', jsonBodyParser, (req, res) => {
    const id = req.params.id

    const index = tasks.findIndex(task => task.id === id)
    if (index < 0) {
        res.json('La tarea no existe')
    } else {
        let taskDelete = tasks.splice(index, 1)
        res.json(taskDelete)
    }
})

// Eliminar todas las tareas
app.delete('/api/deleteall/tasks', jsonBodyParser, (req, res) => {
    if (tasks.length < 0) {
        res.json('No hay tareas para eliminarlas')
    } else {
        tasks = new Array()
        res.json(tasks)
    }
})

// Actualizar la taria a realizada
app.put('/api/done/task/:id', jsonBodyParser, (req, res) => {
    const id = req.params.id
    const index = tasks.findIndex(task => task.id === id)
    if (index < 0) {
        res.json('La tarea no existe')
    } else {
        tasks[index].done = true
        res.json(tasks[index])
    }
})

// Listar todas las tareas realizadas
app.get('/api/listdone/tasks', jsonBodyParser, (req, res) => {
    const taskDone = tasks.filter(task => task.done === true)

    if (taskDone.length < 0) {
        res.json('No hay tareas realizadas')
    } else {
        res.json(taskDone)
    }
})

const port = process.env.PORT

app.listen(port, () => console.log(`Conexion realizada en el puerto ${port}`))