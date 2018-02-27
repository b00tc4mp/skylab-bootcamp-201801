const taskData = require('./taskData')

/** 
 * Task Logic
 * 
 * @version 1.0.0
 */
const taskLogic = {
    /**
     * Creates a To-Do
     * 
     * @param {String} text - The task title
     */
    create(text) {
        taskData.create(text, false)
    },

    /**
     * Marks a task as done
     * 
     * @param {String} id - The task id
     * 
     * @throws {Error} - If task does not exist
     */
    markDone(id) {
        const task = taskData.retrieve(id)

        taskData.update(id, task.text, true)
    },

    /**
     * Removes a task
     * 
     * @param {String} id - The task id
     * 
     * @throws {Error} - If task does not exist, or task is not done
     */
    removeDone(id) {
        const task = taskData.retrieve(id)

        if (task.done)
            return taskData.delete(id)
        
        throw Error(`Cannot remove a pending task.`)
    },

    /** 
     * List to-do tasks 
     */
    listTodo() {
        return taskData.list().filter(task => !task.done)
    },

    /** 
     * List done tasks 
     */
    listDone() {
        return taskData.list().filter(task => task.done)
    }
}

module.exports = taskLogic