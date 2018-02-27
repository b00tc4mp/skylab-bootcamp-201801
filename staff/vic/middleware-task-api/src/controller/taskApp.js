const { apiTask } = require('../api/apiTask')

const redirect = function redirect (req, res, next){
    res.redirect('/')
}

const getAllTasks = function getAllTasks (req, res, next) {
    apiTask.getAllTasks()
        .then(data => res.render('index', {
            tasks: data.data
        }))
}

const createTask = function createTask (req, res, next) {
    const {body: {text}} = req

    apiTask.setCreateTask(text)

    next()
}

const markDoneTask = function markDoneTask (req, res, next) {
    const {params: {id}} = req

    apiTask.setMarkDone(id)

    next()
}

const deleteTask = function deleteTask (req, res, next) {
    const { params: {id}} = req

    apiTask.deleteTask(id)

    next()
}

module.exports = {redirect, getAllTasks, createTask, markDoneTask, deleteTask}