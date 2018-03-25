/**
 * Task Data
 * 
 * @version 1.0.0
 */

const tasks = []

const taskData = {

    /**
     * Creates a task entity in storage
     * 
     * @param {String} text - The task title
     * @param {Boolean} done - The task status
     */
    create(text, done) {
        tasks.push({ id: new Date().getTime(), text, done })
    },

    /**
     * Retrieves a task by id
     * 
     * @param {String} id - The task id
     */
    retrieve(id) {
        // search the task
        const task = tasks.find(task => task.id == id)

        // if no task found, throw Error
        if (!task) throw Error(`No task found with id ${id}`)

        return task
    },

    /**
     * List tasks
     */
    list() { return tasks },

    /**
     * Updates a task
     * 
     * @param {String} id - The task id 
     * @param {String} text - The task title
     * @param {Boolean} done - The task status
     * 
     * @throws {Error} - If no task with id is found 
     */
    update(id, text, done) {
        const task = this.retrieve(id)

        // update the task
        task.text = text
        task.done = done
    },

    /**
     * Deletes a task
     * 
     * @param {String} id - The task id 
     * 
     * @throws {Error} - If no task with id is found 
     */
    delete(id) {
        const index = tasks.findIndex(task => task.id == id)

        if (index < 0) throw Error(`No task found with id ${id}`)

        tasks.splice(index, 1)
    }
}

module.exports = taskData