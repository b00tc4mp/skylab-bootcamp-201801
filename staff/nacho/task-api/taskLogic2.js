const taskData = require("./taskData")
const tasks = []
const taskLogic = {

    create(task) {

        try{
            taskData.retrieve(task.id)
        }catch{
            taskData.register(task)
        }
        throw Error("La tarea ya existe")
        
    },

    listTodo() {
        return taskData.list()
    },

    update(id, text) {

        const index = tasks.findIndex(taskelement => taskelement.id === id)

        if (index < 0) {
            throw Error("There is no task")
        } else {
            tasks[index].text = text

            return tasks[index]
        }
    },

    markDone(id) {
        const index = tasks.findIndex((taskelement) => taskelement.id === id)
        if (index < 0) {
            throw Error("Task does not exist")
        } else {
            tasks[index].done = true
            return tasks[index]
        }
    },

    deleteOne(id) {
        const index = tasks.findIndex(taskelement => taskelement.id === id)
        if (index < 0) {
            throw Error("Task does not exist")
        } else {
            tasks.splice(index, 1)
            return (`Task with id ${id} has been deleted`)
        }
    },

    deleteAll() {

        if (tasks.length === 0) {
            throw Error("There are no task to delete")
        } else {
            tasks.splice(0, tasks.length)
        }
    },

    listDone() {
        const tasksDone = tasks.filter((taskelm) => taskelm.done === true)
        if (tasksDone.length === 0) {
            throw Error("There are not done tasks")
        } else {
            return tasksDone
        }
    }

}


module.exports = taskLogic