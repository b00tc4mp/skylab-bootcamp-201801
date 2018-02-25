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


    removeAll: () =>  taskData.deleteAll(),

    markDone: (id) =>{
        taskData.retrieve(id)
       taskData.markDone(id)
    },

    assign(id, username){
        taskData.retrieve(id)
        taskData.assign(id, username)

    },
    listUsername: (username) => taskData.list().filter(task => task.username === username)


}

module.exports = taskLogic