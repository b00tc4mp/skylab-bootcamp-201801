const { Category, Order, Product, User } = require('../models')

const nodeMailer = require('../mailing')

function validate(user) {
    for (const prop in user) {
        const value = user[prop]

        if (typeof value === 'undefined') throw Error(`${prop} cannot be undefined or empty`)
        //|| !value.trim().length
    }
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function validateUser(user) {
    validate(user)

    //Comrpobar email
    const regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (!regex.test(user.email)) throw Error('El formato del email es incorrecto')
    //Comprobar telefono
    if (isNaN(user.telf)) throw Error('El numero de telefono solo puede contener digitos')
}


const logic = {

    /**
     *      Metodos para las Categorias
     * */
    getAllCategories() {
        return new Promise((resolve, reject) => {
            Category.find({}, { SUBCATEGORIAS: 0, _id: 0 })
                .then(resolve)
                .catch(reject)
        })
    },

    getTotalSubcategories() {
        console.log("🤓")
        return new Promise((resolve, reject) => {
            Category.find({}, { SUBCATEGORIAS: 1, _id: 0 })
                .then(resolve)
                .catch(reject)
        })
    },

    getSubcategoryByCategoryId(id) {
        return new Promise((resolve, reject) => {
            validate({ id })

            Category.findOne({ CATEGORIA_ID: parseInt(id) })
                .then(resolve)
                .catch(reject)
        })
    },

    getSubcategoryById(id) {
        console.log("🤓")
        return new Promise((resolve, reject) => {
            validate({ id })

            Category.find({ SUBCATEGORIAS: parseInt(id) })
                .then(resolve)
                .catch(reject)
        })
    },

    getCategorySearch(query) {
        return new Promise((resolve, reject) => {
            validate({ query })

            const regex = new RegExp(query, 'i')

            Category.find({ CATEGORIA: regex })
                .then(data => {
                    if (data.length <= 0)
                        throw Error('No hay Categorias encontradas.')

                    return data
                })
                .then(resolve)
                .catch(reject)
        })
    },

    /**
     *      Metodos para las Pedidos
     * */
    getTotalOrdersByUser(_idUser) {
        return new Promise((resolve, reject) => {
            validate({ _idUser })

            Order.find({ idUser: _idUser })
                .then(data => {
                    if (data.length <= 0)
                        throw Error('No hay pedidos registrados.')

                    return data
                })
                .then(orders => {
                    Product.populate(orders, { path: 'products.idProduct' })
                        .then(resolve)
                })
                .catch(reject)
        })

    },

    getOrderById(_idUser, idOrder) {
        return new Promise((resolve, reject) => {
            validate({ _idUser, idOrder })

            Order.findOne({ $and: [{ _id: idOrder }, { idUser: _idUser }] })
                .then(resolve)
                .catch(reject)
        })
    },

    setNewOrder(_idUser, _products) {
        console.log("🤓")
        return new Promise((resolve, reject) => {
            validate({ _idUser, _products })

            const order = {
                idUser: _idUser,
                products: _products,
                paymentMethod: {
                    method: "Confirm",
                    status: true
                },
                purchase: {
                    status: "En proceso",
                    deliveryDate: new Date()
                },
                date: new Date(),
                //totalPrice: totalPrice(_products)

            }
            const _order = new Order(order)
            _order.save()
                .then(resolve)
                .catch(reject)

        })

    },

    /**
     *      Metodos para los Productos
     * */

    getTotalProducts() {
        return new Promise((resolve, reject) => {
            Product.find({})
                .then(resolve)
                .catch(reject)
        })
    },

    getProductByArticle(id) {
        return new Promise((resolve, reject) => {
            validate({ id })

            Product.findOne({ ARTICULO: id })
                .then(resolve)
                .catch(reject)
        })
    },

    getProductBySubcat(idSubcategory) {
        return new Promise((resolve, reject) => {
            validate({ idSubcategory })

            Product.find({ SUBCATEGORIA_ID: parseInt(idSubcategory) })
                .then(data => {
                    if (data.length <= 0)
                        throw Error(`No existen productos de la Subcategoria ${idSubcategory}`)
                    return data
                })
                .then(resolve)
                .catch(reject)
        })
    },

    getOffers() {
        return new Promise((resolve, reject) => {
            Product.count()
                .then(count => {

                    const productRandom1 = this.getProductByPosition(getRandomArbitrary(1, count)).then(product => product)
                    const productRandom2 = this.getProductByPosition(getRandomArbitrary(1, count)).then(product => product)
                    const productRandom3 = this.getProductByPosition(getRandomArbitrary(1, count)).then(product => product)
                    const productRandom4 = this.getProductByPosition(getRandomArbitrary(1, count)).then(product => product)
                    const productRandom5 = this.getProductByPosition(getRandomArbitrary(1, count)).then(product => product)
                    const productRandom6 = this.getProductByPosition(getRandomArbitrary(1, count)).then(product => product)
                    const productRandom7 = this.getProductByPosition(getRandomArbitrary(1, count)).then(product => product)
                    const productRandom8 = this.getProductByPosition(getRandomArbitrary(1, count)).then(product => product)


                    return Promise.all([productRandom1, productRandom2, productRandom3, productRandom4, productRandom5, productRandom6, productRandom7, productRandom8])
                })
                .then(resolve)
                .catch(resolve)
        })
    },

    getProductByPosition(posRandom) {
        return new Promise((resolve, reject) => {
            Product.findOne({}).skip(posRandom).limit(1)
                .then(resolve)
                .catch(reject)
        })
    },

    getProductSearch(query) {
        return new Promise((resolve, reject) => {
            validate({ query })

            const regex = new RegExp(query, 'i')

            Product.find({ $or: [{ CATEGORIA: { $regex: regex } }, { SUBCATEGORIA: { $regex: regex } }, { DESCRIPCION: { $regex: regex } }, { SHORTDESC: { $regex: regex } }] })
                .then(data => {
                    if (data.length <= 0)
                        throw Error('No hay Productos encontrados.')

                    return data
                })
                .then(resolve)
                .catch(reject)
        })
    },

    /**
     *      Metodos para los Usuarios
     * */

    setNewUser(_name, _surname, _address1, _address2, _telf, _email, _nif, _username, _password) {

        return new Promise((resolve, reject) => {
            User.find({ $or: [{ nif: _nif }, { username: _username }, { email: _email }] })
                .then(user => {

                    if (user.length > 0)
                        throw Error('El usuario ya existe')

                    const newUser = {
                        name: _name,
                        surname: _surname,
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
                    return new Promise((resolve, reject) => {
                        const paco = new User(newUser)
                        paco.save()
                            .then(resolve)
                            .catch(reject)

                    })

                })
                .then(resolve)
                .catch(reject)

        })

    },

    getValidate(_username, _password) {
        return new Promise((resolve, reject) => {
            validate({ _username, _password })

            User.findOne({ $and: [{ username: _username }, { password: _password }] }, { password: 0, _id: 0 })
                .then(resolve)
                .catch(reject)
        })
    },

    getUserById(idUser) {
        return new Promise((resolve, reject) => {

            validate({ idUser })

            User.findOne({ _id: idUser }, { name: 1, surname: 1, address1: 1, address2: 1, username: 1, email: 1, telf: 1, _id: 0 })
                .then(resolve)
                .catch(reject)
        })

    },

    setUpdateDataUser(_name, _surname, _address1, _address2, _telf, _email, _username, _password, _newPassword) {

        return new Promise((resolve, reject) => {
            this.getValidate(_username, _password)
                .then(user => {
                    if (user.length <= 0) throw Error('Los datos de validacion no son correctos')

                    const password = (_newPassword) ? _newPassword : _password

                    const updateUser = {
                        name: _name,
                        surname: _surname,
                        address1: _address1,
                        address2: _address2,
                        telf: _telf,
                        email: _email,
                        password: password
                    }

                    validateUser(updateUser)

                    return User.findByIdAndUpdate(user._id, updateUser)
                })
                .then(resolve)
                .catch(resolve)
        })
    },

    setRecovery(_email) {
        return new Promise((resolve, reject) => {
            validate({ _email })

            User.findOne({ email: _email }, { email: 1 })
                .then(email => {
                    nodeMailer.send(email.email)
                })
                .then(resolve)
                .catch(reject)
        })
    }
}

module.exports = logic