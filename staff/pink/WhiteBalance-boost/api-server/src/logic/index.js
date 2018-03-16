const { User } = require('../models')


const logic = {

    getUserFollowing(idUser) {
        validate(idUser)

        return User.findOne({ _id: idUser })
            .then(user => {
                if (!user) throw Error(`El usuario con id ${idUser} no existe`)

                return User.findOne({ _id: idUser }).select('following')
            })
            .then(followers => {
                if (!followers) throw Error(`El usuario con id ${idUser} no tiene seguidores`)

                return followers
            })
    },

    getUser(idUser) {
        validate(idUser)

        return User.findOne({ _id: idUser })
    }
}

function validate(data) {

    if (typeof (data) === 'undefined')
        throw Error(`${data} Can't be undefined or null`)
    return data
}

module.exports = logic