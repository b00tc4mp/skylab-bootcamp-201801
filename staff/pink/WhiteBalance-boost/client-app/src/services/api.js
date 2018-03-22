const rp = require('request-promise')

const protocol = 'http'
const host = 'localhost'
const port = 5000

const api = {
    _call(method, path, body, token) {
        const options = {
            method,
            uri: `${protocol}://${host}:${port}/users/${path}`,
            body,
            json: true,
        }
        
        if (token) options.headers = { authorization: `Bearer ${token}` }

        return rp(options)
    },

    login(username, password) {
        return this._call('post', 'login', { username, password })
            .then(data => {
                return data
            })
    },

    create(name, username, password) {
        return this._call('post', 'create', { name, username, password })
    },


    listUser(token) {
        return this._call('get', undefined, undefined, token)
    },

    listFollowing(id, token) {
        return this._call('get', `following`, undefined, token)
    },

    update(id, name, username, password, newName, newUsername, newPassword, token) {
        return this._call('post', `update`, { name, username, password, newName, newUsername, newPassword }, token)
    },

    delete(id, username, password, token) {
        return this._call('post', `delete`, token)
    }
}

export default api;
