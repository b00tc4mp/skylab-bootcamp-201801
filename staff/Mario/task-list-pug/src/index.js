require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const formBodyParser = bodyParser.urlencoded({ extended: false })

const app = express()

app.use(express.static('public'))

app.set('view engine', 'pug')

// const state = {
//     id: "",
//     text: "Initial text",
//     done: false
// }
// const tasks = [{ id: "", text: "Initial text", done: false }, { id: "", text: "jijij", done: false }, { id: "", text: "jaja", done: false }]

app.get('/', (req, res) => {
    // const todo = tasks.filter(task => task.done === false)
    // const done = tasks.filter(task => task.done === true)
    // res.render('list', { listInPugFile: tasks })

    res.render('list', { listInPugFile: done, listInPugFile: todo })
})

const tasks = []

app.post('/', formBodyParser, (req, res) => {
    const { task } = req.body

    const idTk  = Date.now()

    tasks.push({ "idTask": idTk, task, "done": false })
    res.redirect('/')
})

app.get('/done/:idTask', (req,res) => {
    // const { idTask } = req.params
    const { params: { idTask } } = req
    // console.log(idTask)
    // tasks.splice(0,1)
    
    const taskToDone = tasks.find(task => task.idTask == idTask)
    
    taskToDone.done = true;
    
    
    res.redirect('/')
})


const port = process.env.PORT
app.listen(port, () => console.log(`Server running on port ${port}`))