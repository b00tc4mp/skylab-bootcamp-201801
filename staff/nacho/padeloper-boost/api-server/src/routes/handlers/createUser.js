const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req, res) => {
    const { body: { name, surname, email, username, password } } = req

    logic.createUser(name, surname, email, username, password)
        .then(user => {
            res.json(success({ user }))
        })
        
        .catch(err => {
            res.json(fail(err.message))
        })
}