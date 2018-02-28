const axios = require('axios');

const URL = `http://localhost:5000/api`

function getReq (path) {
    return axios.get(path)
}

function postReq (path, text){
    return axios.post(path, {text})
    .then(res=>res.data)
}

function putReq (path){
    return axios.put(path)
    .then(res=>res.data)
}

function deleteReq (path) {
    return axios.delete(path)
    .then(res=>res.data)
}

const taskApi = {
    getTodoTasks: function () {
        return getReq(`${URL}/tasks/todo`)
    },
    getDoneTasks: function () {
        return getReq(`${URL}/tasks/done`)
    },
    createTask: function(text) {
        return postReq(`${URL}/tasks/`,text)
    },
    markDone: function(id) {
        return putReq(`${URL}/tasks/${id}`)
    },
    deleteTask : function(id){
        return deleteReq(`${URL}/tasks/${id}`)
    }
}

module.exports = {taskApi}