const tasks = []

const tasksData = {
    retrieve(id){
        const task = tasks.find(task => task.id === id)
        if(task) return task
      throw Error('Task does not exist')

    },
    list(){
        return tasks
    },

    create(id, text){
        tasks.push({id,text})
    }

}

module.exports = tasksData