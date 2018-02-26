
/**
 * API TASK
 * 
 * @version 1.0.0
 * @param {Array} tasks - task list
 * @param {Boolean} taskExist - if tasks exists true
 * 
 */
require("dotenv").config()
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const jsonBodyParser = bodyParser.json()

const tasks = []

// para documentar, las variables son parámetros

//crear tareas
app.post("/api/create/task", jsonBodyParser, (req,res) => {

    const taskExists = tasks.some(taskElement => taskElement.id === req.body.id )

    if(taskExists){

        res.send("task does exists")

    }else{
        const task = {
            id:req.body.id,
            text:req.body.text,
            done: req.body.done,
            username:req.body.username
        }

        tasks.push(task)
        res.send(task)

    }

})

//listar tareas
app.get("/api/show/tasks", jsonBodyParser, (req,res) => {

    res.json(tasks)
})

//actualizar una tarea
app.put("/api/update/task/:id", jsonBodyParser, (req,res) => {
    const id = req.params.id
    const text = req.body.text

    const index = tasks.findIndex(taskelement => taskelement.id===id)

    if(index<0){
        res.send("task does not exist")

    }else{
        tasks[index].text = text
        res.send(tasks[index])
    }
})

//eliminar una tarea
app.delete("/api/delete/task/:id", jsonBodyParser, (req,res) => {
    const id = req.params.id
    const index = tasks.findIndex(taskelement => taskelement.id===id)
    if(index<0){
        res.send("task does not exist")

    }else{

        tasks.splice(index,1)
        res.send(tasks)
    }
    
})

//eliminar todas las tareas
app.delete("/api/deleteall/tasks",jsonBodyParser, (req,res) => {
    if(tasks.length<0){
        res.send("tasks is already delete")
    }else{
        tasks.splice(0,tasks.length)
        res.send(tasks)
    }
})

//actualizar tareas realizadas
app.put("/api/done/task/:id",jsonBodyParser, (req,res) => {
    const id = req.params.id
    const index = tasks.findIndex((taskelement) => taskelement.id === id)
    if(index<0){
        res.send("task does not exist")
    }else{
        tasks[index].done = true
        res.send(tasks[index])
    }
})

//listar tareas realizadas
app.get("/api/listdone/tasks",jsonBodyParser, (req,res) => {
    const taskDone = tasks.filter((taskelm) => taskelm.done===true)
    if(taskDone<0){
        res.send("there are no done tasks")
    }else{
        res.send(taskDone)
    }
    
})


const port = process.env.PORT
app.listen(port, () => console.log(`connexion running at port ${port}`))// es un callback