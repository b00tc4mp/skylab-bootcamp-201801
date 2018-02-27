const tasks = []
let id = 0
const taskData = {
    list() { return tasks },

    create(text, done) {
        tasks.push({ id, text, done })
        id++
    },

    retrieve(id) {
        const task = tasks.find(task => {
            return task.id == id
        })

        if (task) return task

        throw Error('Task does not exist.')
    },

    update(id, text, done) {
        const task = this.retrieve(id)
        if (!done) {
            return task.text = text
        }
        task.text = text
        task.done = done
    },

    delete(id) {
        if (!id) {
            return tasks.splice(0, tasks.length)
        }
        const index = tasks.findIndex(task => task.id == id)

        if (index < 0) throw Error('Task does not exist.')

        tasks.splice(index, 1)
    }
}

module.exports = taskData