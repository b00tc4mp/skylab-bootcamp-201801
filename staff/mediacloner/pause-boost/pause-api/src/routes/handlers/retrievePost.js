const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req, res) => {
    const { params: { id } } = req

    logic.retrievePost(id)
        .then(post => {
            res.json(success(post))
        })
        .catch(err => {
            res.json(fail(err.message))
        })
}