const conn = require ('axios')


const taskAPI = {
    listTodo(){
        return conn.get('http://localhost:8000/api/tasks/todo')
            .then(obj => obj.data.data)
            
        //taskData.list().filter(task => !task.done)
    },


    listDone(){
        return conn.get('http://localhost:8000/api/tasks/done')
            .then(obj => obj.data.data)
            
    },

    create(text){

        return conn.post('http://localhost:8000/api/tasks', {
            "username":"username",
            text
            })
  
    },
    markDone(id){

        return conn.put('http://localhost:8000/api/tasks/'+id)

    },

    removeDone(id){

        return conn.delete('http://localhost:8000/api/tasks/'+id)



    }    
}


module.exports = taskAPI