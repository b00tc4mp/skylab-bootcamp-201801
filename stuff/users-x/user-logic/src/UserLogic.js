const User = require('./User')

/**
 * User Logic (business object) interface
 * 
 * @version 1.0.0
 */
class UserLogic {
    constructor() {
        if (new.target === UserLogic)
            throw Error('cannot instantiate')
    }

    register(name, surname, email, username, password) {
        throw Error('not implemented')
    }

    retrieve(id) {
        throw Error('not implemented')
    }

    update(id, username, password, name, surname, email, newUsername, newPassword) {
        throw Error('not implemented')
    }

    destroy(id, username, password) {
        throw Error('not implemented')
    }

    list() {
        throw Error('not implemented')
    }
}

module.exports = UserLogic