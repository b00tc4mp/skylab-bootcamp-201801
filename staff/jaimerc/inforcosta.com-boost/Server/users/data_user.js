const User = require('./modelo_user')

const dataUser = {

    getUserByNifAndUsername(_nif, _username) {
        return new Promise((resolve, reject) => {
            User.find({ $and: [{ nif: _nif, username: username }] })
                .then(resolve)
                .catch(reject)
        })
    },

    setNewUser(user) {
        return new Promise((resolver, reject) => {
            const newUser = new User(user)
            newUser.save()
                .then(resolve)
                .catch(reject)
        })
    },

    getValidate(_username, _password) {
        return new Promise((resolve, reject) => {
            User.find({ $and: [{ username: _username, password: _password }] })
                .then(resolve)
                .catch(reject)
        })
    }
}

module.exports = dataUser
