const bodyParser = require('body-parser')

const tasksLogic = require('../logic/tasksLogic')

const { Router } = require('express')

const router = Router()

const jsonBodyParser = bodyParser.json()

const { success, fail } = require('../api/api-utils')

/* /// create task /// */

router.post('/task', jsonBodyParser, (req, res) => {
    const { text, username } = req.body
    try {
        tasksLogic.create(text, username)

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

        tasksLogic.remove(id)
    
        res.json(success('Task removed correctly'))
        
})

/* ///  Delete all tasks  /// */

router.delete('/tasks', (req, res) => {
    tasksLogic.removeAll()

    res.json(success('Tasks removed correctly'))

})

/* /// Mark task as done  ///  */

router.put('/task/:id', (req, res) => {
    const { params: { id } } = req

        tasksLogic.markDone(id)
    
        res.json(success('Task marked as done'))

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

// If you don't need to update the user or the text, dont put them in the body. Otherwise, write "username" : "name" or "text" : "task to do"

router.patch('/task/:id', jsonBodyParser, (req, res) => {
    const { params: { id } } = req
    const { text, username } = req.body

    tasksLogic.update(id, text, username)
    
    res.json(success('Task updated correctly'))
           
})

/* /// List tasks per user /// */

router.get('/tasks/:username', jsonBodyParser, (req, res) => {
    const { params: { username } } = req

    res.json(success('User tasks listed correctly', tasksLogic.userTasks(username)))

})

/*  /// List all the users /// */

router.get('/users', (req, res) => {
    res.json(success('Tasks done listed correctly', tasksLogic.listUsers()))
})


module.exports = router