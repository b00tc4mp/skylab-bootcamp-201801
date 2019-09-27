
const _ = require("lodash")

let tasks = [];

let id = 0;

const taskData = {

    insert (text, username){    
        id += 1      
        const task = {
            username ,
            id,
            done: false,
            text 
          };
      tasks.push(task)

      return task
    },

    retrieve (filter){
        if (filter === 'done'){
            let result=[]
            tasks.forEach(
              ({ username, id, text, done }) => {
                
                if (done) result.push( { username, id, text, done } )
              })
            return result
        }

        if (filter === 'todo'){
            let result=[]
            tasks.forEach(
              ({ username, id, text, done }) => {
                
                if (!done) result.push( { username, id, text, done } )
              })
          
              return result

        }
    },


    update (id, text, done){
            if ( done === undefined){ //Update text
                const pos = _.findIndex(tasks, (o) => { return o.id == id });
                const result = tasks[pos]
                if (result !== undefined){
                  tasks[pos].text = text
                  return result
                }
                
        
              }
        
              else { //Update done state
                const pos = _.findIndex(tasks, (o) => { return o.id == id });
                const result = tasks[pos]
                if (result !== undefined){
                  tasks[pos].done = true
                  return result
                }
        
              }
        },

    delete (id){

        if (id === 'all'){
            let result=[]
            tasks.forEach(
              ({ username, id, text, done }) => {   
               result.push( { username, id, text, done } )
              })
              tasks = []
            return result
        }
    
          else{
            const pos = _.findIndex(tasks, (o) => { return o.id == id });
            const result = tasks[pos]
            if (result !== undefined) {
              
              tasks.splice(pos,1)
              return result
            
            }

    }


    }

}



module.exports = taskData
