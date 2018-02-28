const axios = require('axios');

const URL = `http://localhost:5000/api`

    /**
     * Creates a task
     * 
     * @param {String} title - The task title
     * @param {String} description - The task description
     * 
     * @returns {function} data() that returns a promise 
     */

/**
 * Custom Method Get
 * 
 * @param {Strubg} path - url to call
 * 
* @returns {function} data() that returns a promise 
*/
function __get (path) {
    return data(axios.get(path))
}

/**
 * Custom Method Post
 *  
 * @param {String} path - Url to call
 * @param {String} text - The task description
 * 
 * @returns {function} - data() that returns a promise
 */
function __post (path, text){
    return data(axios.post(path, {text}))
}

/**
 * Custom Method Put
 * 
 * @param {String} path - Url to call
 * 
 * @returns {function} - data() that returns a promise
 */
function __put (path){
    return data(axios.put(path))
}

/**
 * Custom Method Delete
 * 
 * @param {String} path - Url to call 
 * 
 * @returns {function} - data() that returns a promise
 */
function __delete (path) {
    return data(axios.delete(path))
}

/**
 * 
 * @param {Promise} _res - Promise form Custom Methods Get/Post/Put/Delete
 * 
 * @returns {Promise} - return new Promise res.data
 */
function data(_res) {
    return _res.then(res => res.data)
}

const apiTask = {
    /**
     * List all tasks
     * 
     * @returns {function} custom get method
     */
    getAllTasks: function () {
        return __get(`${URL}/tasks/all`)
    },

    /**
     * Create new task
     * 
     * @returns {function} custom post method
     */
    setCreateTask: function(text) {
        return __post(`${URL}/tasks/`,text)
    },

    /**
     * Set status to Done from task
     * 
     * @param {String} id - id task 
     * 
     * @returns {function} custom put method
     */
    setMarkDone: function(id) {
        return __put(`${URL}/tasks/${id}`)
    },

    /**
     * Delete a task
     * 
     * @param {String} id - id task 
     * 
     * @returns {function} custom delete method
     */
    deleteTask : function(id){
        return __delete(`${URL}/tasks/${id}`)
    }
}

module.exports = {apiTask}