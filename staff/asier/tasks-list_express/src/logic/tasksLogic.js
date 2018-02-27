const tasksData = require('../data/tasksData')

function validate(text) {
    if (!text) throw Error('You need to add some text')
}



const tasksLogic = {

    /* /// create task /// */

    create(text) {

        validate(text)


        tasksData.create(text, false)
    },

    /* /// List every task /// */

    list() {
        return tasksData.list()

    },

    /* /// Mark task as done  ///  */

    markDone(id) {
        const task = tasksData.retrieve(id)
        const text = task.text

        tasksData.update(id, text, true)


    },

    /* /// Remove task from tasklist */

    remove(id) {

        tasksData.delete(id)
    },

    /* /// List tasks already done /// */

    listDone() {
        return tasksData.list().filter((task) => task.done == true).map(({ id, text }) => ({ id, text }))
    },

    /* /// List tasks pending to do /// */

    listToDo() {
        return tasksData.list().filter((task) => task.done == false).map(({ id, text }) => ({ id, text }))
    },

    /* ///  Delete all tasks  /// */

    removeAll() {
        tasksData.deleteAll()
    },

    /* /// Update task /// */

    update(id, text, done) {

        tasksData.update(id, text, done)
    },


}

module.exports = tasksLogic