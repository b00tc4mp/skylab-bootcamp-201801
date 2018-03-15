const Product = require('./model_product')

const dataProduct = {

    getTotalProducts() {
        return new Promise((resolve, reject) => {
            Product.find({})
                .then(resolve)
                .catch(reject)
        })
    },

    getProductByArticle(id) {
        return new Promise((resolve, reject) => {
            Product.findOne({ ARTICULO: id })
                .then(resolve)
                .catch(reject)
        })
    },

    getProductBySubcat(idSubcategory) {
        return new Promise((resolve, reject) => {
            Product.find({ SUBCATEGORIA_ID: idSubcategory })
                .then(resolve)
                .catch(reject)
        })
    },

    getProductsCounter() {
        return new Promise((resolve, reject) => {
            Product.count()
                .then(resolve)
                .catch(reject)
        })
    },

    getProductByPosition(posRandom) {
        return new Promise((resolve, reject) => {
            Product.find({}).skip(posRandom).limit(1)
                .then(resolve)
                .catch(reject)
        })
    },

    getProductSearch(query) {
        return new Promise((resolve, reject) => {
            Product.find({ $or: [{ DESCRIPCION: query }, { SHORTDESC: query }] })
                .then(resolve)
                .catch(reject)
        })

    }
}

module.exports = dataProduct