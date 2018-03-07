const rp = require('request-promise')

// TODO implement api client

const api = {
    _baseUrl() {
        with (this) {
            return `${protocol}://${host}:${port}/api`
        }
    },

    _call(method, path, body) {
        // return rp(`${this._baseUrl()}/${path}`)
        //     .then(res => JSON.parse(res))
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
    }
}

module.exports = api