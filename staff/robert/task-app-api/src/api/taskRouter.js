const bodyParser = require('body-parser')

const taskLogic = require('../logic/taskLogic')

const { Router } = require('express')

const { success, fail } = require('./api-utils')

const router = Router()

const jsonBodyParser = bodyParser.json()

router.post('/tasks', jsonBodyParser, (req,res)=> {
    const { text } = req.body

    try {
        taskLogic.create(text)

        res.json(success('Task creation succeeded.'))
    } catch (err) {
        res.json(fail('Task creation failed.', err.message))
    }

    
})

router.put('/tasks/:id', (req,res) => {
    const { params: { id } } = req

    try {
        taskLogic.markDone(id)

        res.json(success('Task marked as done.'))
    } catch (err) {
        res.json(fail(`Couldn't mark the task as done.`, err.message))
    }
})

router.delete('/tasks/:id', (req,res) => {
    const {params: { id } } = req

    try {
        taskLogic.remove(id)

        res.json(success('Task deleted.'))
    } catch (err) {
        res.json(fail(`Something went wrong, couldn't delete the task`))
    }
})

router.get('/tasks/done', (req,res) => {
    res.json(success('Tasks done listing succeeded', taskLogic.listDone()))
})

router.get('/tasks/todo', (req,res) => {
    res.json(success('Tasks to-do listing succeeded', taskLogic.listTodo()))
})

router.delete('/tasks', (req,res) => {
    try {
        taskLogic.removeAll()

        res.json(success('All tasks removed.'))
    } catch (err) {
        res.json(fail(`Couldn't remove the tasks.`))
    }
})

router.patch('/tasks/:id', (req,res) => {
    const {params: { id } } = req

    const { text } = req.body

    try {
        taskLogic.update(id,text)

        res.json(success('Task successfully update.'))
    } catch (err) {
        res.json(fail(`Sorry, something went wrong, couldn't update`))
    }
})

module.exports = router