const axios = require('axios')
const url = require('url')

class TaskApi {
    constructor(protocol, host, port) {
        this.baseUrl = `${protocol}://${host}`

        if (port) this.baseUrl += `:${port}/api/`
    }

    create(title, description) {
        return axios.post(url.resolve(this.baseUrl, 'task'), { title, description }).then(res => res.data)
    }

    list() {
        return axios.get(url.resolve(this.baseUrl, 'tasks')).then(res => res.data)
    }

    retrieve(id) {
        return axios.get(url.resolve(this.baseUrl, `task/${id}`)).then(res => res.data)
    }

    remove(id) {
        return axios.delete(url.resolve(this.baseUrl, `task/${id}`)).then(res => res.data)
    }

    markDoing(id) {
        return axios.put(url.resolve(this.baseUrl, `task/${id}/DOING`)).then(res => res.data)
    }

    listDoing() {
        return axios.get(url.resolve(this.baseUrl, 'tasks/DOING')).then(res => res.data)
    }

    markReview(id) {
        return axios.put(url.resolve(this.baseUrl, `task/${id}/REVIEW`)).then(res => res.data)
    }

    listReview() {
        return axios.get(url.resolve(this.baseUrl, 'tasks/REVIEW')).then(res => res.data)
    }

    markDone(id) {
        return axios.put(url.resolve(this.baseUrl, `task/${id}/DONE`)).then(res => res.data)
    }

    listDone() {
        return axios.get(url.resolve(this.baseUrl, 'tasks/DONE')).then(res => res.data)
    }

    markTodo(id) {
        return axios.put(url.resolve(this.baseUrl, `task/${id}/TODO`)).then(res => res.data)
    }

    listTodo() {
        return axios.get(url.resolve(this.baseUrl, 'tasks/TODO')).then(res => res.data)
    }
}

module.exports = TaskApi