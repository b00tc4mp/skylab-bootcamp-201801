require('dotenv').config()
const express = require('express')
// const taskRouter = require('./api/taskRouter')
const bodyParser = require('body-parser')
const router = express.Router()
const app = express()
app.use('/api', router)
const port = process.env.PORT
const jsonBodyParser = bodyParser.json

const tasks = []

/**
 * Create task
 */
router.post('/tasks', jsonBodyParser, (req,res) =>{

    const {id, text} = req.body

    if(!id || !text) return res.json(ko('task registration failed','invalid tex or id'))
    const alreadyExists = tasks.some(task => task.id === id)

    if (alreadyExists) res.json(ko('task registration failed','task id already exists'))

    tasks.push({id,text})


})

/**
 * List todos tasks
 */
router.get('/tasks/todo', (req,res)=> res.json(ok('Tasks listing succeded', tasks)))




/**
 * List done tasks
 */
router.get('/tasks/done', (req,res)=>{

})

/**
 * Mark done
 */
router.put('/tasks/:id', (req,res) =>{

})

/**
 * Remove a task
 */
router.delete('/tasks/:id', (req,res) =>{

})

/**
 * Remove a all tasks
 */
router.delete('/tasks', (req,res) =>{

})

/**
 * Update a task
 */
router.patch('/tasks/:id', jsonBodyParser, (req,res)=>{

})


function ok(message, data) {
    const res = { status: 'OK', message }

    if (data) res.data = data

    return res
}

function ko(message, error) {
    const res = { status: 'KO', message }

    if (error) res.error = error

    return res
}



app.listen(port, () => console.log(`Task API running on port ${port}`))