const bodyParser = require('body-parser')
const taskLogic = require('../logic/taskLogic')
const {Router} = require('express')
const {success, fail} = require('./api-utils')
const router = Router()
const jsonBodyParser = bodyParser.json



/**
 * Create task
 */
router.post('/tasks', jsonBodyParser, (req,res) =>{

    const {id, text} = req.body
    try{
        taskLogic.register(id, text)

        res.json(success('Task registered successfully'))
    } catch(err) {
        //if no id or text registration fails
        res.json(fail('Task registration failed', 'Task id already exists'))
    }


})

/**
 * List todos tasks
 */
router.get('/tasks/todo', (req,res)=>res.json(success('Tasks listing succeded', taskLogic.list())))


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

module.exports = router

