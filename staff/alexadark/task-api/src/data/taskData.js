const tasks = []
const taskData = {

    list: () => tasks,

    create: (id, text) => tasks.push({id, text}),

    retrieve: (id) => {
        const task = tasks.find(task => task.id === id)
        if (task) return task
        throw Error('Task does not exists')
    },

    delete: (id)=> {
        const index = tasks.findIndex(task =>task.id === id)
        if(index < 0) throw Error ('Task does not exists')
        tasks.splice(index,1)
    },
    update(id,text){
        const task = this.retrieve(id)
        task.text = text
    },
    deleteAll: ()=>{
        tasks.length = 0
    },
    markDone(id){
        const task = this.retrieve(id)

        task.done = true
    },
    assign(id,username){
        const task = this.retrieve(id)
        if(task.done) throw Error('this task is already done')
        if(task.username)throw Error('this task is already assigned')
        task.username = username
    }
}

module.exports = taskData