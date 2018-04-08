const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req, res) => {

    const { body: { name, surname, email, username, password, recipes } } = req

    logic.createUser(name, surname, email, username, password, recipes)
        .then(id => {
            res.json(success({id}))
        })
        .catch(err => {
            res.json(fail(err.message))
        })
}