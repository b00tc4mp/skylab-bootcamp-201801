require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

let taskslist = []
const jsonBodyParser = bodyParser.json()

app.get('/api/tasks', (req,res) => {
    res.json(taskslist)
})

app.post('/api/tasks', jsonBodyParser, (req,res) => {
    const { text } = req.body
    let index

    if(!text) res.json(ko('Task registration failed.','You dont defined task'))

    if((taskslist.length) === 0){
        index = 1;
    }
    else{
        index = taskslist[taskslist.length -1].id + 1
    }

    taskslist.push({id:index,text,done:false})

    res.json(ok('Task registration succeeded.'))
})

app.put('/api/tasks/:id', (req,res) => {
    const { id } = req.params
    
    if(!id) res.json(ko('Task update failed.','Invalid id'))

    const task = taskslist.find(task => task.id === parseInt(id))
    
    if(!task) res.json(ko('Task update failed.','this task is doesnt exist'))

    task.done = true

    res.json(ok('Task update succeded.'))
})

app.delete('/api/tasks/:id', (req,res) => {
    const { id } = req.params

    if(!id) res.json(ko('Task delete failed.', 'Invalid id'))

    const index = taskslist.findIndex(task => task.id === parseInt(id))

    if(index === -1) res.json(ko('Task delete failed.', 'this task is doesnt exist'))

    taskslist.splice(index,1)

    res.json(ok('Task delete succeded'))
})

app.get('/api/tasks/done', (req,res) => {
    const done = taskslist.filter(task => task.done === true)

    res.json(done)
})

app.get('/api/tasks/todo', (req,res) => {
    const todo = taskslist.filter(task => task.done === false)

    res.json(todo)
})

app.delete('/api/tasks', (req,res) => {
    taskslist.splice(0)
    res.json(ok('Task delete succeded.'))
})

app.patch('/api/tasks/:id', jsonBodyParser, (req,res) => {
    const { id } = req.params
    const { text } = req.body

    if(!id || !text) res.json(ko('Task update failed.','Invalid id'))

    const task = taskslist.find(task => task.id === parseInt(id))

    if(!task) res.json(ko('Task update failed.','this task is doesnt exist'))

    task.text = text

    res.json(ok('Task update succeded.'))
})

const port = process.env.PORT

app.listen(port, () => console.log(`Use API on port ${port}`))

function ok(message,data){
    const res = { status: 'OK', message}

    if(data) res.data = data

    return res
}

function ko(message,error){
    const res = { status: 'KO', message}

    if(error) res.error = error

    return res
}