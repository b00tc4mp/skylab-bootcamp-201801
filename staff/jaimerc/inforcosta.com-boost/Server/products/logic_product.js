const dataProduct = require('./data_product')

const logicProduct = {

    getTotalProducts() {
        return dataProduct.getTotalProducts()
    },

    getProductByArticle(id) {
        validate(id)

        return dataProduct.getProductByArticle(id)
            .then(data => {
                if (data.length <= 0)
                    throw Error(`No existe el producto con ${id}`)

                return data
            })
    },

    getProductBySubcat(idSubcategory) {
        validate(idSubcategory)

        return dataProduct.getProductBySubcat(idSubcategory)
            .then(data => {
                if (data.length <= 0)
                    throw Error(`No existen productos de la Subcategoria ${idSubcategory}`)
                    return data
            })
    },

    getOffers() {
        return dataProduct.getProductsCounter()
            .then(count => {

                const productRandom1 = dataProduct.getProductByPosition(getRandomArbitrary(1, count)).then(product => product[0])
                const productRandom2 = dataProduct.getProductByPosition(getRandomArbitrary(1, count)).then(product => product[0])
                const productRandom3 = dataProduct.getProductByPosition(getRandomArbitrary(1, count)).then(product => product[0])
                const productRandom4 = dataProduct.getProductByPosition(getRandomArbitrary(1, count)).then(product => product[0])

                return Promise.all([productRandom1, productRandom2, productRandom3, productRandom4])
            })
    },

    getProductSearch(query) {
        validate(query)
        const regex = new RegExp(query, 'i')

        return dataProduct.getProductSearch(regex)
            .then(data => {
                if (data.length <= 0)
                    throw Error('No hay Productos encontrados.')

                return data
            })
    }
}

function validate(data) {
    if (typeof data === 'undefined' || !data.trim().length)
        throw Error(`${data} cannot be undefined or blanck`)
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

module.exports = logicProduct