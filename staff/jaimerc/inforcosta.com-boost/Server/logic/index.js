const Category = require('./module_category')

function validate(data) {
    if (typeof data === 'undefined' || !data.trim().length)
        throw Error(`${data} cannot be undefined or blanck`)
}

const logic = {
    getTotalCategories() {
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
        validate(id)

        return new Promise((resolve, reject) => {
            Category.find({ CATEGORIA_ID: parseInt(id) })
                .then(category => category[0])
                .then(resolve)
                .catch(reject)
        })
    },

    getSubcategoryById(id) {
        validate(id)

        console.log(id)
        return new Promise((resolve, reject) => {
            Category.find({ SUBCATEGORIAS: { ID: parseInt(id) } })
                .then(resolve)
                .catch(reject)
        })
    },

    getCategorySearch(query) {
        validate(query)

        const regex = new RegExp(query, 'i')

        return new Promise((resolve, reject) => {
            Category.find({ CATEGORIA: regex })
                .then(data => {
                    if (data.length <= 0)
                        throw Error('No hay Categorias encontradas.')

                    return data
                })
                .then(resolve)
                .catch(reject)
        })
    }
}

module.exports = logic