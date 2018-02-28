const nodeFetch = require('node-fetch')

/**
 * Task App API client.
 *
 * @version 1.0.0
 */
var TaskApi;
(function () {
    "use strict";

    function call(url) {  
        
       return nodeFetch(url).then(res => {
          
           return res.json()} )
    }

    function callWithMethodJson(url, methodProvided, bodyProvided) {
        
        return nodeFetch(url, { method: methodProvided, body: JSON.stringify(bodyProvided), headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'}

        }).then(res => {
            
            return res.json()
        })
    }

    function callWithMethod(url, methodProvided) {

        return nodeFetch(url, {
            method: methodProvided })
                .then(res => { return res.json()})
    }

    TaskApi = {
        baseUrl: "http://localhost:5556/api",

        searchAllTasks: function () {
            return call(this.baseUrl + "/tasks")
        },

        createNewTask: function (textNewTask) {
            const newTask = {
                "text": textNewTask, 
                "username": "Paco" }

            return callWithMethodJson(
                this.baseUrl + '/task',
                'POST',
                newTask
            )
        },

        makeDoneTasks: function (id) {
            return callWithMethod(this.baseUrl + '/task/' + id, 'PUT')
        },

        DeleteTasks: function (id){
            return callWithMethod(this.baseUrl + '/task/' + id, 'DELETE')
        }

    }
})();

module.exports = TaskApi
