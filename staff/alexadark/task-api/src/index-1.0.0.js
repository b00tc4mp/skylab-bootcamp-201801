require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const _ = require('lodash')
const app = express()
const router = express.Router()
app.use('/api', router)
const port = process.env.PORT
const jsonBodyParser = bodyParser.json()

const tasks = []

/**
 * List todoList
 */
router.get('/tasks/todo', (req, res) => res.json(success('tasks successfully listed', tasks.filter(task => !task.done))))

/**
 * Create task
 */
router.post('/tasks', jsonBodyParser, (req, res) => {
    const {id, text} = req.body

    if (!id || !text) res.json(fail('tasks creation failed', 'invalid id or text'))


    if (taskIndex(tasks, id) > -1) res.json(fail('task creation failed', 'task already exists'))

    tasks.push({id, text})

    res.json(success('task added', req.body))
})

/**
 * Delete task
 */
router.delete('/tasks/:id', jsonBodyParser, (req, res) => {
    const idParam = req.params.id
    const id = req.body.id
    if (idParam !== id) res.json(fail('task deletion failed', 'zid does not match'))
    const index = taskIndex(tasks, id)
    if (index < 0) res.json(fail('task deletion failed', 'this task id does not exist'))
    tasks.splice(index, 1)
    res.json(success(`task ${id} successfully deleted`, tasks))


})

/**
 * Delete all tasks
 */
router.delete('/tasks', jsonBodyParser, (req, res) => {
    const confirm = req.body.confirm
    if (confirm !== 'yes') res.json(fail('deleting all tasks failed', 'deletion is not confirmed'))
    tasks.length = 0
    res.json(success('All tasks successfully deleted', tasks))

})

/**
 * Update task
 */
router.patch('/tasks/:id', jsonBodyParser, (req, res) => {
    const idParam = req.params.id
    const {id, text} = req.body
    if (idParam !== id) res.json(fail('Task update failed', 'task id does not match'))
    tasks.find(task => task.id === id).text = text

    res.json(success(`task ${id} successfully updated`))

})

/**
 * Mark task done
 */
router.put('/tasks/:id', (req, res) => {
    const idParam = req.params.id
    const index = taskIndex(tasks, idParam)
    if (index < 0) res.json(fail('mark done failed', 'This task does no exists'))

    tasks.find(task => task.id === idParam).done = true

    res.json(success('task successfully marked as done'))

})

/**
 * List done tasks
 */

router.get('/tasks/done', (req, res) => res.json(success('Done tasks successfully listed', tasks.filter(task => task.done))))

/**
 * Assign task to username
 */
router.put('/tasks/assign/:id',jsonBodyParser,(req,res) => {
    const idParam = req.params.id
    const username = req.body.username
    if(taskIndex(tasks,idParam) < 0) res.json(fail('username assignment failed','this task does not exists'))
    const taskToAssign = tasks.find(task=> task.id === idParam)
    if(taskToAssign.username) res.json(fail('username assignment failed','this task is already assigned'))

    if (taskToAssign.done) res.json(fail('username assignment failed','this task is already done'))
    taskToAssign.username = username
    res.json(success(`task ${idParam} successfully assigned to ${username}`))
})

/**
 * List tasks by username
 */
router.get('/tasks/:username', (req,res)=> {
    const username = req.params.username
    res.json(success(`tasks for ${username} successfully listed`, tasks.filter(task => task.username === username)))
})



function success(message, data) {
    const res = {status: 'OK', message}
    if (data) res.data = data
    return res
}


function fail(message, error) {
    const res = {status: 'KO', message}
    if (error) res.error = error
    return res

}

const taskIndex = (tasks, id) => tasks.findIndex(task => task.id === id)


app.listen(port, () => console.log(`tasks API running on port ${port}`))