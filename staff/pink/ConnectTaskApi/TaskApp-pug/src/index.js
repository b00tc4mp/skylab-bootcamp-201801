require('dotenv').config()

const TaskApi = require('./api/index.js')
const express = require('express')
const bodyParser = require('body-parser')

const formBodyParser = bodyParser.urlencoded({ extended: false })

const app = express()
app.use(express.static('public'))
app.set('view engine', 'pug')
let ids = 1

const tasks = []//[{ id: ids++, text: 'comprar pan', done: false }, { id: ids++, text: 'comprar leche', done: false }, { id: ids++, text: 'comprar huevos', done: false }, { id: ids++, text: 'ir al gym', done: true }, { id: ids++, text: 'condones', done: true }]

app.post('/tasks', formBodyParser, (req, res, next) => {
    const { text } = req.body

    TaskApi.createNewTask(text).then(res => creating(res) ).catch(error=> console.log(error))

    function creating(result){
    res.redirect('/tasks') 
    }

    // tasks.push({id:ids++, text:text, done:false})
})



app.get('/tasks', (req, res) => {

    TaskApi.searchAllTasks().then(res => listing(res) ).catch(error =>  console.log(error))
    
    function listing(tasks) {
    console.log(tasks.data)
    const listToDo = tasks.data.filter(task => {
        return task.done === false
    })
    
    const listDone = tasks.data.filter(task => {
        return task.done === true
    })
    res.render('index', {listToDo, listDone})
}
})

app.get('/tasks/:id', (req, res) => {
    
    const {id} = req.params
    TaskApi.makeDoneTasks(id).then(res => markingAsDone(res)).catch(err => console.log(err))

    function markingAsDone(algomas) {
        res.redirect('/tasks')

    }
    
    // const find = tasks.findIndex(task => task.id == id)
    //     tasks[find].done === true
    
    
    
})

app.get('/task/:id', (req, res) => {
    const {id} = req.params
    
    TaskApi.DeleteTasks(id).then(res => deleting(res)).catch(err => console.log(err))
    
    function deleting(algo) {
        res.redirect('/tasks')
    }
    
    
    // const find = tasks.findIndex(task => task.id == id)
    // tasks.splice(find, 1)
})


const port = 8080
app.listen(port, () => console.log(`Server running on port ${port}`))
