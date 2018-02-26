/**
 * API TASK
 * 
 * @version 1.0.1
 * @param {Array} tasks - task list
 * @param {Boolean} taskExist - if tasks exists true
 * 
 */
require("dotenv").config()
const taskLogic = require("./taskLogic")
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const jsonBodyParser = bodyParser.json()
const router = express.Router()
app.use("/api", router)


// para documentar, las variables son parámetros

//crear tareas
router.post("/create/task", jsonBodyParser, (req, res) => {
    // el pararametro req.body lo enviamos como parametro de create a tasklogic.js, es la forma de comunicar los archivos y enviar la info
    try {
        const newTask = taskLogic.create(req.body)
        res.send(newTask)

    } catch (err) {
        res.send(err.message)
    }

})

//listar tareas
router.get("/show/tasks", jsonBodyParser, (req, res) => {

    res.send(taskLogic.listTodo())// el return de la otra funcion lo comunicamos con listTodo()
})

//actualizar una tarea
router.put("/update/task/:id", jsonBodyParser, (req, res) => {
    const id = req.params.id
    const text = req.body.text
    try {
        const updateTask = taskLogic.update(id, text)
        res.send(updateTask)
    }catch (err) {
        res.send(err.message)
    }

})

//eliminar una tarea
router.delete("/delete/task/:id", jsonBodyParser, (req, res) => {
    const id = req.params.id
    try {
        const deleteOneTask = taskLogic.deleteOne(id)
        res.send(deleteOneTask)
    }catch (err) {
        res.send(err.message)
    }

})


//eliminar todas las tareas
router.delete("/deleteall/tasks", jsonBodyParser, (req, res) => {
    try {
        const deleteAll = taskLogic.deleteAll()
        res.send(deleteAll)
    }
    catch (err) {
        res.send(err.message)
    }
})


//actualizar tareas realizadas
router.put("/done/task/:id", jsonBodyParser, (req, res) => {
    const id = req.params.id
    try {
        const updateDone = taskLogic.markDone(id)
        res.send(updateDone)
    }catch (err) {
        res.send(err.message)
    }

})

//listar tareas realizadas
router.get("/listdone/tasks", jsonBodyParser, (req, res) => {

    try {
        res.send(taskLogic.listDone())
    }catch (err) {
        res.send(err.message)
    }

})

const port = process.env.PORT
app.listen(port, () => console.log(`connexion running at port ${port}`))// es un callback