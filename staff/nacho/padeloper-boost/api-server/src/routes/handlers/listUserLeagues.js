const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req, res) => {


    const {params:{idUser}} =req

    logic.listUserLeagues(idUser)

        .then(leagues => res.json(success(leagues)))
        .catch(err => res.json(fail(err.message)))
}