const axios = require('axios')

let taskApi;

const port = process.env.PORTAPI
const url = `http://localhost:${port}/api/tasks`


taskApi = {

    createTask: (task) => {
        axios.post(url, { task, status:false})
    },

    getTasks: () => {
        return axios.get(url)
            .then(function (response) {
                return response.data.data
            })
            .catch((error) => {console.log(error)})
    },

    modifyTask: (id) =>{

        return axios.put(`${url}/${id}`)
            .then(function (response) {
                return response.data
            })
            .catch((error) => {console.log(error)})
    },

    removeTask: (id) => {

        return axios.delete(`${url}/${id}`)
        .then(function (response) {
            return response.data
        })
        .catch((error) => {console.log(error)})

    }

}

module.exports = taskApi