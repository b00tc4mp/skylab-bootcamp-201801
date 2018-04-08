const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req, res) => {
    const { body: { name, surname, email, username, password, newUsername, newPassword, description } } = req
    const { params: { _id } } = req

    logic.update(_id, name, surname, email, username, password, newUsername, newPassword, description)
        .then(() => {
            res.json(success())
        })
        .catch(err => {
            res.json(fail(err.message))
        })
}