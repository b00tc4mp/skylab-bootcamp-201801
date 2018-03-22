const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req, res) => {
    const { params: { _id } } = req

    logic.retrieve(_id)
        .then(user => {
            res.json(success(user))
        })
        .catch(err => {
            res.json(fail(err.message))
        })
}