const bodyParser = require('body-parser')

const tasksLogic = require('../logic/tasksLogic')

const { Router } = require('express')

const router = Router()

const jsonBodyParser = bodyParser.json()

const { success, fail } = require('../api/api-utils')

/* /// create task /// */

router.post('/task', jsonBodyParser, (req, res) => {
    const { text } = req.body

    try {
        tasksLogic.create(text)

        res.json(success('Task has been created'))
    } catch (err) {
        res.json(fail("Task creation has failed", err.message))
    }
})

/* /// List every task /// */

router.get('/tasks', (req, res) => res.json(success("Tasks listed correctly", tasksLogic.list())))

/*  /// Remove task from tasklist */

router.delete('/task/:id', (req, res) => {
    const { params: { id } } = req

    try {

        tasksLogic.remove(id)

        res.json(success('Task removed correctly'))
    } catch (err) {
        res.json(fail(`Something went wrong, couldn't delete the task`))
    }
})

/* ///  Delete all tasks  /// */

router.delete('/tasks', (req, res) => {

    try {
        tasksLogic.removeAll()

        res.json(success('Tasks removed correctly'))

    } catch (err) {
        res.json(fail(`Couldn't remove the tasks.`))
    }

})

/* /// Mark task as done  ///  */

router.put('/task/:id', (req, res) => {
    const { params: { id } } = req

    try {

        tasksLogic.markDone(id)
        res.json(success('Task marked as done'))
    } catch (err) {
        res.json(fail(`Couldn't mark the task as done.`, err.message))
    }


})

/* /// List tasks pending to do /// */

router.get('/tasks/todo', (req, res) => {
    res.json(success('Tasks left to do listed correctly', tasksLogic.listToDo()))
})

/* /// List tasks already done /// */

router.get('/tasks/done', (req, res) => {
    res.json(success('Tasks done listed correctly', tasksLogic.listDone()))
})

/* /// Update task /// */

router.patch('/task/:id', jsonBodyParser, (req, res) => {
    const { params: { id } } = req

    const { text } = req.body

    try {
        tasksLogic.update(id, text)

        res.json(success('Task updated correctly'))

    } catch (err) {

        res.json(fail(`Something went wrong updating the task`))
    }

})




module.exports = router