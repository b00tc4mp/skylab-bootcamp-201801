const tasks = []

let taskId = 0

const tasksData = {

    /* /// create task /// */

    create(text, done) {

        taskId += 1
        tasks.push({ taskId, text, done })
    },

    /* /// List every task /// */

    list() {
        if (tasks.length < 1) throw Error('There are no tasks to show')

        return tasks
    },

    retrieve(id) {
        const task = tasks.find(task => task.taskId === Number(id))

        if (task) return task

        throw Error('Task does not exist.')
    },

    /*  /// Remove task from tasklist */

    delete(id) {
        const index = tasks.findIndex(task => task.taskId === Number(id))

        if (index < 0) throw Error('task does not exist.')

        tasks.splice(index, 1)
    },

    /* ///  Delete all tasks  /// */

    deleteAll() {

        tasks.splice(0, tasks.length)

    },

    /* /// Update task /// */

    update(id, text, done) {
        const task = this.retrieve(id)

        task.text = text
        task.done = done


    },

    /* /// List tasks per user /// */

    userTasks(username) {
        const userList = []

        for (let i = 0; i < tasks.length; i++) {

            if (tasks[i].username === username) userList.push(tasks[i])
        }

        if (userList < 1 || tasks.length < 1) throw Error('There are no tasks to show')

        return userList
    },

    /*  /// List all the users /// */

    listUsers() {
        if (users.length < 1) throw Error('There are no users to show')

        return users
    }


}

module.exports = tasksData