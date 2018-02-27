const axios = require('axios');

const URL = `http://localhost:5000/api`

function __get (path) {
    return axios.get(path)
        .then(res => res.data)
}

function __post (path, text){
    return axios.post(path, {text})
}

function __put (path){
    return axios.put(path)
}

function __delete (path) {
    return axios.delete(path)
}

const apiTask = {
    getAllTasks: function () {
        return __get(`${URL}/tasks/all`)
    },
    setCreateTask: function(text) {
        return __post(`${URL}/tasks/`,text)
    },
    setMarkDone: function(id) {
        return __put(`${URL}/tasks/${id}`)
    },
    deleteTask : function(id){
        return __delete(`${URL}/tasks/${id}`)
    }
}

module.exports = {apiTask}
