const taskData = require('../data/taskData')

const taskLogic = {

    listTodo() {
        try {
            return taskData.list()
        } catch (err) {
            return err.message
        }
    },

    create(task) {
        try {
            taskData.retrieve(task.id)
        } catch (err) {
            return taskData.create(task)
        }

        throw Error('La tarea ya existe')
    },

    update(id, text) {
        try {
            const task = taskData.retrieve(id)
            const updateTask = taskData.update(id, text, task.done)
            return updateTask
        } catch (err) {
            return err.message
        }
    },

    markDone(id) {
        try {
            const task = taskData.retrieve(id)
            const doneTask = taskData.update(id, task.text, true)
            return doneTask
        } catch (err) {
            return err.message
        }
    },

    remove(id) {
        try {
            const task = taskData.retrieve(id)
            const deleteTask = taskData.delete(id)
            return deleteTask
        } catch (err) {
            return err.message
        }
    },

    removeAll() {
        try {
            const tasks = taskData.list()
            for (var i = 0; i < tasks.length; i++) {
                taskData.delete(tasks[i].id)
            }
            return ('Las tareas han sido eliminadas')
        } catch (err) {
            return err.message
        }
    },

    listDone() {
        try {
            const tasks = taskData.listDone()
            return tasks
        } catch (err) {
            return err.message
        }
    }
}

module.exports = taskLogic