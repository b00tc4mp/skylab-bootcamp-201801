const User = require('./User')
const UserData = require('./UserData')

/**
 * User Logic (business object)
 * 
 * @version 1.0.0
 */
class UserLogic {
    constructor(userData) {
        this.userData = userData
    }

    register(name, surname, email, username, password) {
        const user = new User()

        user.username = username

        if (this.userData.filter(user).length) throw Error('User already exists')

        user.name = name
        user.surname = surname
        user.email = email
        user.password = password

        return this.userData.insert(user)
    }

    retrieve(id) {
        return this.userData.retrieve(id)
    }

    update(id, username, password, name, surname, email, newUsername, newPassword) {
        let user = new User()

        user.username = newUsername

        const users = this.userData.filter(user)

        if (users.length && users[0].id !== id) throw Error('User already exists')

        user = this.userData.retrieve(id)

        if (user.username = username && user.password === password) {
            user.name = name
            user.surname = surname
            user.email = email
            user.username = newUsername || username
            user.password = newPassword || password

            this.userData.update(user)
        } else
            throw Error('Wrong username and/or password.')
    }

    destroy(id, username, password) {
        const user = this.userData.retrieve(id)

        if (user.username = username && user.password === password) {
            this.userData.delete(id)
        } else
            throw Error('Wrong username and/or password.')
    }

    list() {
        return this.userData.list().map(({ id, name, surname, email, username }) => ({ id, name, surname, email, username }))
    }
}

module.exports = UserLogic

// const users = []
// const userLogic = new UserLogic(new UserData(users))

// const id = userLogic.register('n','s','e','u','p')

// const user = userLogic.retrieve(id)
// //console.log(user)

// userLogic.update(id, 'u', 'p', 'n.','s.','e.','u.','p.')

// console.log(userLogic.list())

// userLogic.destroy(id, 'u.', 'p.')

// console.log(userLogic.list())

//console.log(users)