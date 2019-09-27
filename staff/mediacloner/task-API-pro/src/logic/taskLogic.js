const taskData = require ('../data/taskData.js')


const taskLogic = {

    create(text, username) {
       return taskData.insert(text, username)
    }, // done = false


     list(filter){
        if (filter === 'done'){
           return taskData.retrieve('done')
        }

        if (filter === 'todo'){
          return taskData.retrieve('todo')
        }
    },
    update(id, text, done){

      return taskData.update (id, text, done)

    },
    delete(id) {
      if (id === 'all'){
      return taskData.delete('all')
    }

    else{
        return taskData.delete(id)
        }
    }
}



module.exports = taskLogic