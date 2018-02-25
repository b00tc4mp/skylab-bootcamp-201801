var _ = require('lodash');

let tasks = []
const ids = []

 taskData = {
    
    list() { return tasks },

    retrieve(task) {

        function isTask(_task) { 
            var _task = _task.id.toString();
            return _task === task;
        }

        var task = tasks.find(isTask)
        
        if (task) return task 

        throw Error('Task does not exist.')
    },

    create(task, status) {
        
        var id = _.random(1000, 9000);
        ids.push(id)

        tasks.push({ task, status, id })

    }, 

    delete() {

        if (tasks.length === 0) throw Error('There are no tasks to delete')

        tasks.splice(0,tasks.length)

    },

    deleteSelected(id, task) {

        console.log(task)

        const index = tasks.findIndex(task => task.id.toString() === id)

        if (index < 0) throw Error('Task does not exist.')

        tasks.splice(index, 1)

    },

    // id / new task / newStatus
    update(id, newTask, newStatus) {
        const task = this.retrieve(id)

        task.id = id
        task.task = newTask
        task.status = newStatus
    },

    listTodo(){
        return _tasks = _.filter(tasks, function(o) { return !o.status; });
    },

    listDone(){
        return _tasks = _.filter(tasks, function(o) { return o.status; });
    }

}


module.exports = taskData

