/**
 * API TASK 
 * 
 * @version 1.0.1
 * @param {Array} tasks - Lista de tareas
 * @param {Boolean} taskExist - Si existe la tarea
 * 
 */

require('dotenv').config()

const express = require('express')

const bodyParser = require('body-parser')

const taskLogic = require('../logic/taskLogic')

const jsonBodyParser = bodyParser.json()

const app = express()

const router = express.Router()

app.use('/api', router)


// Listar Tareas
router.get('/show/tasks', (req, res) => {
    res.json(taskLogic.listTodo())
})

// Crear Tarea
router.post('/create/task', jsonBodyParser, (req, res) => {
    try {
        const newTask = taskLogic.create(req.body.task)
        res.json(newTask)

    } catch (err) {
        res.send(err.message)
    }

})

// Modificar una tarea
router.put('/update/task/:id', jsonBodyParser, (req, res) => {
    const id = req.params.id
    const text = req.body.text

    const updateTask = taskLogic.update(id, text)
    res.json(updateTask)
})

// Eliminar una tarea
router.delete('/delete/task/:id', jsonBodyParser, (req, res) => {
    const id = req.params.id

    const deleteTask = taskLogic.remove(id)
    res.send(deleteTask)
})

// Eliminar todas las tareas
router.delete('/deleteall/tasks', jsonBodyParser, (req, res) => {
    res.send(taskLogic.removeAll())
})

// Actualizar la tarea a realizada
router.put('/done/task/:id', (req, res) => {
    console.log("DONE TASK!!!!!!!")
    const id = req.params.id
    console.log(id)
    const taskDone = taskLogic.markDone(id)
    res.json(taskDone)
})

// Listar todas las tareas realizadas
router.get('/listdone/tasks', jsonBodyParser, (req, res) => {
    res.send(taskLogic.listDone())

})

const port = process.env.PORT

app.listen(port, () => console.log(`Conexion realizada en el puerto ${port}`))