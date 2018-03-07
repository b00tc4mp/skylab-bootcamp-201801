const rp = require('request-promise')

const api = {
    _baseUrl() {
        with (this) {
            return `${protocol}://${host}:${port}/api`
        }
    },

    _call(method, path, body) {
        return rp({
            method,
            uri: `${this._baseUrl()}/${path}`,
            body,
            json: true
        })
    },

    list() {
        return this._call('get', 'users')
    },

    create(name, surname, email, username, password) {
        return this._call('post', 'user', { name, surname, email, username, password })
    },

    retrieve(id){
        return this._call('get', `user/${id}`)
    },

    update(id, name, surname, email, username, password, newUsername, newPassword) { 
        return this._call('put', `user/${id}`, { name, surname, email, username, password, newUsername, newPassword })
    },

    remove(id, username, password) {
        return this._call('delete', `user/${id}`, {username, password})
    }
}

module.exports = api