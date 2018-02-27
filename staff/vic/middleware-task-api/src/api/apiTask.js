const axios = require('axios');

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
        return __get(`http://localhost:5000/api/tasks/all`)
    },
    setCreateTask: function(text) {
        return __post(`http://localhost:5000/api/tasks/`,text)
    },
    setMarkDone: function(id) {
        return __put(`http://localhost:5000/api/tasks/${id}`)
    },
    deleteTask : function(id){
        return __delete(`http://localhost:5000/api/tasks/${id}`)
    }
}

module.exports = {apiTask}