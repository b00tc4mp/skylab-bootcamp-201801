const { success, fail } = require('./api-utils');
const logic = require('../../logic');

const createUser = (req, res) => {
    const { body: {name, surname, email, picture , username, password}} = req;

    logic.registerUser({name, surname,email, picture, username, password})
        .then(id => {
            res.json(success({ id }))
        })
        .catch(err => {
            res.json(fail(err.message))
        });
};

module.exports = createUser;