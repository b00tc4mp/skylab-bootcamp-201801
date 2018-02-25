const bodyParser = require('body-parser')
const {Router} = require('express')
const router = Router()
const {success, fail} = require('./api-utils')
const taskLogic = require('../logic/taskLogic')

const jsonBodyParser = bodyParser.json()

const tasks = []


/**
 * List todoList
 */
router.get('/tasks/todo', (req, res) => res.json(success('tasks successfully listed', taskLogic.listTodo())))

/**
 * Create task
 */
router.post('/tasks', jsonBodyParser, (req, res) => {
    const {id, text} = req.body

    if (!id || !text) res.json(fail('tasks creation failed', 'invalid id or text'))

    try {
        taskLogic.register(id, text)
        res.json(success('task added', req.body))

    } catch (err) {
        res.json(fail('task creation failed', err.message))
    }


})

/**
 * Delete task
 */
router.delete('/tasks/:id', jsonBodyParser, (req, res) => {
    const idParam = req.params.id
    const id = req.body.id

    try{
        taskLogic.remove(id,idParam)
        res.json(success(`task ${id} successfully deleted`))
    } catch(err) {
        res.json(fail('task deletion failed',err.message))
    }
})

/**
 * Delete all tasks
 */
router.delete('/tasks', jsonBodyParser, (req, res) => {
    const confirm = req.body.confirm
    if (confirm !== 'yes') res.json(fail('deleting all tasks failed', 'deletion is not confirmed'))
    taskLogic.removeAll()
    res.json(success('All tasks successfully deleted'))

})

/**
 * Update task
 */
router.patch('/tasks/:id', jsonBodyParser, (req, res) => {
    const idParam = req.params.id
    const {id, text} = req.body

    try{
        taskLogic.update(id, text,idParam)
        res.json(success(`task ${id} successfully updated`))
    } catch(err){
        res.json(fail('Task update failed', err.message))
    }

})

/**
 * Mark task done
 */
router.put('/tasks/:id', (req, res) => {
    const id = req.params.id

    try{
        taskLogic.markDone(id)
        res.json(success(`task ${id} successfully marked as done`))
    } catch(err){
        res.json(fail('mark done failed', err.message))
    }
})

/**
 * List done tasks
 */

router.get('/tasks/done', (req, res) => res.json(success('Done tasks successfully listed', taskLogic.listDone())))

/**
 * Assign task to username
 */
router.put('/tasks/assign/:id', jsonBodyParser, (req, res) => {
    const id = req.params.id
    const username = req.body.username

    try{
        taskLogic.assign(id, username)
        res.json(success(`task ${id} successfully assigned to ${username}`))
    } catch(err){
        res.json(fail('username assignment failed', err.message))
    }
})

/**
 * List tasks by username
 */
router.get('/tasks/:username', (req, res) => {
    const username = req.params.username
    res.json(success(`tasks for ${username} successfully listed`, taskLogic.listUsername(username)))
})


module.exports = router