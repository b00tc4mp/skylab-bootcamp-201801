const taskData = require('../data/taskData')

function validate(text) {
    if (!text) throw Error('Invalid task body, you must enter a text.')
}

const taskLogic = {
    create(text) {
        validate(text)

        taskData.create(text, false)
    },

    markDone(id) {
        const task = taskData.retrieve(id)        

        const text = task.text
        taskData.update(id, text, true)
    },

    remove(id) {
        taskData.delete(id)
    },

    listDone() {
        return taskData.list().filter((task) => task.done == true).map(({ id, text }) => ({ id, text }))
    },

    listTodo() {
        return taskData.list().filter((task) => task.done == false).map(({ id, text }) => ({ id, text }))
    },

    removeAll() {
        taskData.delete()
    },

    update(id, text) {
        // const task = taskData.retrieve(id)

        taskData.update(id, text)
    }
}

module.exports = taskLogic