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
}

module.exports = taskData