const tasks = []

const users = []

let taskId = 0

const tasksData = {

    /* /// create task /// */

    create(text, username) {
        
        if (!users.includes(username)) {
            users.push(username)
        }

        taskId += 1
        tasks.push({ taskId, text, username, done: false })
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
        const index = tasks.findIndex(x => x.taskId === Number(id))

        if (index < 0) throw Error('task does not exist.')

        tasks.splice(index, 1)
    },

    /* ///  Delete all tasks  /// */

    deleteAll() {

        tasks.splice(0, tasks.length)

    },

    /* /// Mark task as done  ///  */

    markDone(id) {
        const index = tasks.findIndex(x => x.taskId === Number(id))

        if (index < 0) throw Error('task does not exist.')

        if (tasks[index].done === true) throw Error('Task is already done')

        tasks[index].done = true

    },

    /* /// List tasks pending to do /// */

    listToDo() {
        const todoList = []

        for (let i = 0; i < tasks.length; i++) {

            if (tasks[i].done === false) todoList.push(tasks[i])
        }

        if (todoList < 1 || tasks.length < 1) throw Error('There are no tasks to show')

        return todoList
    },

    /* /// List tasks already done /// */

    listDone() {
        const doneList = []

        for (let i = 0; i < tasks.length; i++) {


            if (tasks[i].done === true) doneList.push(tasks[i])
        }

        if (doneList < 1 || tasks.length < 1) throw Error('There are no tasks to show')

        return doneList
    },

    /* /// Update task /// */

    update(id, text, username) {
        const task = this.retrieve(id)

        // check if username already exist. if not, add it to the userList.
        if (!users.includes(username)) {
            users.push(username)
        }

        if (username && text) {

            task.text = text
            task.username = username 

        } else if (username && !text) {
            task.username = username 

        } else if (text && !username) {

            task.text = text
        }

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