const taskData = require('../data/taskData')


//validate task exist
function validate(task) {
    if (!task) throw Error('Invalid task')
}


tasksLogic = {
    
    register(task, status) {
        validate(task)

        try{
            taskData.retrieve(task)
        } catch(err) {
            return taskData.create(task, status)
        }

        throw Error('Task already exists.')
    }, 

    list(){
        return taskData.list().map(({ id, status, task }) => ({ id, status, task}))
    },

    delete(){

        try{
            taskData.delete()
        } catch(err) {
            throw Error('Cannot delete tasks, There are not tasks to delete')
        }

    },

    deleteSelected(id){

        const task = taskData.retrieve(id)

        try{
            taskData.deleteSelected(id, task)
        } catch(err) {
            throw Error('Cannot delete this task, There are not tasks to delete')
        }

    },

    update(id, task, newTask, status, newStatus){

        const taskSelected = taskData.retrieve(id)

        if (taskSelected.id.toString() === id) {
            taskData.update(id, newTask, newStatus)
        } else
            throw Error('Wrong id to update a task, nop coincides.')

    },

    listTodo(){
        return taskData.listTodo().map(({ id, status, task }) => ({ id, status, task}))
    },

    listDone(){
        return taskData.listDone().map(({ id, status, task }) => ({ id, status, task}))
    }

}

module.exports = tasksLogic