let tasks = []

const taskData = {

    list() {
        if (tasks.length === 0) {
            throw Error('No hay tareas almacenadas')
        } else {
            return tasks
        }
    },
    
    listDone() {
        const tasksDone = this.list().filter(task => task.done === true)
        if (tasksDone.length === 0) {
            throw Error('No hay ninguna tarea realizada')
        } else {
            return tasks
        }
    },

    create(task) {
        task.id = 
        tasks.push(task)
        return item
    },

    retrieve(id) {
        const task = tasks.find(task => task.id == id)
        if (task) return task

        throw Error('La tarea no existe')
    },

    update(id, text, done) {
        const index = tasks.findIndex(task => task.id == id)
        tasks[index].text = text
        tasks[index].done = done
        return tasks[index]
    },

    delete(id) {
        const index = tasks.findIndex(task => task.id == id)

        if (index < 0) {
            throw Error('No hay tarea/s para eliminar')
        } else {
            tasks.splice(index, 1)
            return (`Tarea con id ${id} ha sido eliminada`)
        }
    }
}

module.exports = taskData