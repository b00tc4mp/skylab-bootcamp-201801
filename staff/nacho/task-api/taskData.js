const tasks = []
const taskData = {

    register(task){
        if(this.retrieve){

        }else{
            const taskItem = {
                id: task.id,
                text: task.text,
                done: task.done,
                username: task.username
            }
            tasks.push(taskItem)
        }
    },

    list(){
        if(tasks.length === 0){
            return "there are no tasks "
        }else{
            return tasks
        }
    },

    retrieve(id){
        const taskId = tasks.find(taskElement => task.id === id)
        if(taskId) return tasks
        throw Error ("Task does not exist")
    }

}

module.exports = taskData