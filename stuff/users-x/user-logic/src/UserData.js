const User = require('./User')
const uuidv4 = require('uuid/v4')

const model = new User()

/** 
 * User Data (storage manager) interface
 * 
 * @version 1.0.0
 */
class UserData {
    constructor() {
        if (new.target === UserData)
            throw Error('cannot instantiate')
    }

    insert(user) {
        throw Error('not implemented')
    }

    retrieve(id) {
        throw Error('not implemented')
    }

    update(user) {
        throw Error('not implemented')
    }

    delete(id) {
        throw Error('not implemented')
    }

    list() {
        throw Error('not implemented')
    }

    filter(user) {
        throw Error('not implemented')
    }
}

module.exports = UserData