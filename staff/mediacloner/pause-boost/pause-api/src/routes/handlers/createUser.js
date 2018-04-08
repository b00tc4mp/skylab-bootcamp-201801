const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req, res) => {
    const { body: { name, surname, email, username, password, city, country, about, timelineTitle } } = req

    logic.createUser(name, surname, email, username, password, city, country, about, timelineTitle)
        .then(objResult => {
            res.json(success({ objResult }))
        })
        .catch(err => {
            res.json(fail(err.message))
        })
}