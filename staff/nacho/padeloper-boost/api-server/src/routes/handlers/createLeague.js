const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req, res) => {
    const { body: { name,city,club,type,category,maxplayers} } = req

    logic.createLeague(name,city,club,type,category,maxplayers)
        .then(name => {
            res.json(success({ name }))
        })
        .catch(err => {
            res.json(fail(err.message))
        })
}