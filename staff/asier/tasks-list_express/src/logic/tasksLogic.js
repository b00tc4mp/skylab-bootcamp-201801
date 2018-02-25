const tasksData = require('../data/tasksData')

function validateText(text) {
    if (!text) throw Error('You need to add some text')
}

function validateUsername(username) {
    if (!username) throw Error('You need to add an user')
}


const tasksLogic = {

    /* /// create task /// */

    create(text, username) {

        validateText(text)
        validateUsername(username)

        tasksData.create(text, username)        
    },

    /* /// List every task /// */

    list() {
        return tasksData.list()

    },

    /* /// Mark task as done  ///  */

    markDone(id) {       
        tasksData.markDone(id)

    },

    /* /// Remove task from tasklist */

    remove(id) {

        tasksData.delete(id)         
    },

    /* /// List tasks already done /// */

    listDone() {
        return tasksData.listDone()
    },

    /* /// List tasks pending to do /// */

    listToDo() {
        return tasksData.listToDo()
    },

    /* ///  Delete all tasks  /// */

    removeAll() {
        tasksData.deleteAll()
    },

    /* /// Update task /// */

    update(id, text, username) {

        if (text || username) {

            tasksData.update(id, text, username)

        } else {
            validateText(text)
            validateUsername(username)
        }
        
    },

    /* /// List tasks per user /// */

    userTasks(username) {
        return tasksData.userTasks(username)
    },

    /*  /// List all the users /// */

    listUsers() {
        return tasksData.listUsers()
    }

}

module.exports = tasksLogic