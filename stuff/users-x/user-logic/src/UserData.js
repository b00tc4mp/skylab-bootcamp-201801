const User = require('./User')
const uuidv4 = require('uuid/v4')

const model = new User()

/** 
 * User Data (storage manager)
 * 
 * @version 1.0.0
 */
class UserData {
    constructor(users) {
        this.users = users
    }

    insert(user) {
        User.validate(user)

        const id = uuidv4()

        user.id = id

        this.users.push(User.clone(user))

        return id
    }

    retrieve(id) {
        User.validateId(id)

        const user = this.users.find(user => user.id === id)

        if (user) return User.clone(user)

        throw Error('User does not exist.')
    }

    update(user) {
        const { id } = user

        User.validateId(id)
        User.validate(user)

        const _user = this.users.find(user => user.id === id)

        if (_user) return _user.copy(user)

        throw Error('User does not exist.')
    }

    delete(id) {
        const index = this.users.findIndex(user => user.id === id)

        if (index < 0) throw Error('User does not exist.')

        this.users.splice(index, 1)
    }

    list() { return this.users.map(user => User.clone(user)) }

    filter(user) { return this.users.filter(_user => _user.matches(user)).map(user => User.clone(user)) }
}

module.exports = UserData