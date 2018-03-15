const dataUser = require('./data_user')

const logicUser = {

    setNewUser(_name, _lastName, _address1, _address2, _telf, _email, _nif, _username, _password) {

        const user = dataUser.getUserByNifAndUsername(_nif, _username)

        if (user) throw Error('El usuario ya existe')

        const newUser = {
            name: _name,
            lastName: _lastName,
            address1: _address1,
            address2: _address2,
            telf: _telf,
            email: _email,
            nif: _nif,
            username: _username,
            password: _password,
        }
        validateUser(newUser)

        //enviar el usuario menos el password
        return dataUser.setNewUser(newUser)
    },

    getValidate(username, password) {
        validate(username)
        validate(password)

        return dataUser.getValidate(username, password)
            .then(data => {
                if (data.length <= 0)
                    throw Error('EL usuario o contraseña son erroneas')

                return data
            })
    },

    setUpdateDataUser(_name, _lastName, _address1, _address2, _telf, _email, _username, _password) {
        
        const user = dataUser.getValidate(username, password)

        if (user) throw Error('Los datos de validacion no son correctos')

        const updateUser = {
            name: _name,
            lastName: _lastName,
            address1: _address1,
            address2: _address2,
            telf: _telf,
            email: _email,
            username: _username,
            password: _password,
        }
        validateUser(updateUser)
    }


}

function validateUser(user) {
    //Comrpobar email
    const regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (!regex.test(user.email)) throw Error('El formato del email es incorrecto')
    //Comprobar telefono
    if (isNaN(user.telf)) throw Error('El numero de telefono solo puede contener digitos')

    for (prop in user) {
        validate(user[prop])
    }
}

function validate(data) {
    if (typeof data === 'undefined' || !data.trim().length)
        throw Error(`${data} no puede ser indefinido o en blanco`)
}

module.exports = logicUser