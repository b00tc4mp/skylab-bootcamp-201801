const axios = require('axios')

let taskApi;

(function () {

    const baseUrl = 'http://localhost:5000/api'

    taskApi = {

        //Peticion de todas las tareas
        getTaskList: function () {
            return axios.get(`${baseUrl}/show/tasks`)
                .then(res => res.data)
        },

        setTask: function (task) {
            return axios.post(`${baseUrl}/create/task`,  task )
        },

        setTaskDone: function (id) {
            return axios.put(`${baseUrl}/done/task/${id}`)
        },

        setTaskDelete: function (id) {
            return axios.delete(`${baseUrl}/delete/task/${id}`)
        }
    }

})()

module.exports = taskApi