const { User, Trip, Comment } = require('../models')


module.exports = {
    /**
     * Register new user if the username is not already taken
     *
     * @param name
     * @param surname
     * @param email
     * @param picture
     * @param username
     * @param password
     */
    registerUser: (name, surname, email, picture, username, password) =>
        User.findOne({ username })
            .then(user => {
                return User.create({ name, surname, email, picture, username, password })
            })

}