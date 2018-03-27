const { success, fail } = require('./api-utils')
const logic = require('../../logic')


module.exports = (req, res) => {
    const { params: { id } } = req

    logic.listById(id)
        .then(posts => {
            res.json(success(posts))
        })
        .catch(err => {
            res.json(fail(err.message))
        })
}