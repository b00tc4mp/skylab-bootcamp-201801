const taskData = require('../data/taskData')

function validate(id, idParam){
    if(idParam !== id) throw Error('task id does not match')
}


const taskLogic = {
    listTodo: () => taskData.list().filter(task => !task.done),

    listDone: () => taskData.list().filter(task => task.done),

    register: (id, text) => {

        try {
            taskData.retrieve(id)
        } catch (err) {
            return taskData.create(id, text)
        }
        throw Error('Task id already exists')
    },

    remove: (id, idParam) => {
        validate(id,idParam)

        taskData.retrieve(id)
        taskData.delete(id)

    },
    update: (id,text,idParam)=>{
        validate(id,idParam)
        taskData.update(id,text)
    },


    removeAll: () =>  tasks.length = 0,

    markDone: (id) =>{
        const task = taskData.retrieve(id)
        task.done = true
    },

    assign(id, username){
        const task = taskData.retrieve(id)
        if(task.done) throw Error('this task is already done')
        if(task.username)throw Error('this task is already assigned')
        task.username = username

    },
    listUsername: (username) => taskData.list().filter(task => task.username === username)


}

module.exports = taskLogic