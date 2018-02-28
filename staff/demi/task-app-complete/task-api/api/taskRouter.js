const bodyParser = require('body-parser')

const tasksLogic = require('../logic/taskLogic')

const { Router } = require('express')

const { success, fail } = require('./api-utils')

const router = Router()

// list tasks
router.get('/tasks', (req, res) => res.json(success('Tasks listing succeeded.', tasksLogic.list())))

const jsonBodyParser = bodyParser.json()

// create task
router.post('/tasks', jsonBodyParser, (req, res) => {
    const { task } = req.body
    const { status } = req.body

    try {
        tasksLogic.register(task, status)

        res.json(success('Task registration succeeded.'))
    } catch (err) {
        res.json(fail('Task registration failed.', err.message))
    }
})

//delete tasks
router.delete('/tasks', jsonBodyParser, (req, res) => {
    //const { id, task, status } = req.body
    try {
        tasksLogic.delete()
        res.json(success('Tasks deleted succeeded.'))
    }catch (err){
        res.json(fail('Tasks deleted failed', err.message))
    }
})

//delete task
router.delete('/tasks/:id', jsonBodyParser, (req, res) => {
    const { params: { id } } = req


    try {
        tasksLogic.deleteSelected(id)

        res.json(success('Task deletion succeeded'))
    } catch(err) {
        res.json(fail('Task deletion failed.', err.message))
    }
    
})

// update a task
router.put('/tasks/:id', jsonBodyParser,  (req, res) => {
    const { params: { id } } = req

    try {
        tasksLogic.update(id)

        res.json(success('Task update succeeded'))
    } catch(err) {
        res.json(fail('Task update failed.', err.message))
    }


})

//list todo -> GET /api/tasks/todo
router.get('/tasks/todo', (req, res) =>{

    res.json(success('Tasks listing succeeded.', tasksLogic.listTodo()))

})

//list done -> GET /api/tasks/done
router.get('/tasks/done', (req, res) =>{

    res.json(success('Tasks listing succeeded.', tasksLogic.listDone()))

})

module.exports = router