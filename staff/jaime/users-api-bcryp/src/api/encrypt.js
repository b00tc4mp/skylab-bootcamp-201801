const bcrypt = require('bcrypt-nodejs')

/**
 * Encript the password
 * 
 * Method Synchronous
 * 
 * @param {String} hash - return encrypted password
 * @returns {String<hash>} 
 */

let encrypt

(function () {
    
    const hash = {
        encrypt: bcrypt.hashSync 
        //Other method:
        //encrypt: password =>  bcrypt.hashSync(password)
    }

    encrypt = hash
}())

module.exports = encrypt


/**
 * Encript the password
 * 
 * Method Asynchronous
 * 
 *  Warning => this method does not work
 * 
 */
/*
const encrypt = (function () {

    const BCRYPT_SALT = 12

    return (password) => {
        bcrypt.hash(password, BCRYPT_SALT, null, function (err, hash) {
            if (err)
                throw Error('No se ha podido crear la contraseña')
            return hash
        });
    }
}())
*/
