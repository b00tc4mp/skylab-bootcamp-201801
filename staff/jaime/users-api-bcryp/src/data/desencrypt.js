const bcrypt = require('bcrypt-nodejs')

/**
 * Desencript the password
 * 
 * Method Synchronous
 * 
 * @param {String} password - password to validate
 * @param {String} hash - encrypted password
 * @param {Boolean} desencrypt - validate de password
 * @returns {compare<Boolean>} compare
 */

let desencrypt

(function () {

    const compare = {
        desencrypt: (password, hash) => bcrypt.compareSync(password, hash)
    }

    desencrypt = compare
}())

module.exports = desencrypt


/**
 * Encript the password
 * 
 * Method Asynchronous
 * 
 *  Warning => this method does not work
 */
/*
const desencrypt = (function () {
    
    return function (hash,password) {
        bcrypt.compare(password, hash, (err, res) => {
            if (err)
                throw Error('Contraseña o Usuario introducido erroneamente')
            return res //true o false
        });
    }
}())
*/