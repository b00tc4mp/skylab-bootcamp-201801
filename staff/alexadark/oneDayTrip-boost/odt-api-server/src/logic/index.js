const User = require('../models/User');
const Trip = require('../models/Trip');


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
   registerUser: ({name, surname, email, picture, username, password}) => Promise.resolve()
        .then(() => User.findOne({username}))
       .then(user => {
           if (user) throw Error('username already exists');

           return User.create({name, surname, email, picture, username, password});
       })
}