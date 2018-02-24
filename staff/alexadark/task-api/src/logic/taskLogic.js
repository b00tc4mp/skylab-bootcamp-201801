const tasksData = require('../data/taskData')

function validate(id,text) {
    if(!id || !text) throw Error ('Missing text or id')
}


const taskLogic = {



    register(id,text){
        validate(id,text)

        try{
            tasksData.retrieve(id)
        }catch(err){
            return tasksData.create(id, text)

        }

        throw Error ('Task registration failed','Task id already exists')
    },

    list(){
        return  tasksData.list()

    }







}

module.exports = taskLogic