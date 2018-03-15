const axios = require('axios')

let apiClient;

(function () {

    const baseUrl = 'http://localhost:8080'

    apiClient = {

        //Obtener los productos de ofertas
        getOffersProducts: function () {
            return axios.get(`${baseUrl}/products/offers`)
        },

        getCategory: function () {
            return axios.get(`${baseUrl}/categories`)
        },

        getCategoryById: function (idCategory) {
            return axios.get(`${baseUrl}/${idCategory}`)
        },

        getSubcategory: function (idCategory) {
            return axios.get(`${baseUrl}/${idCategory}`)
        },

        getSubategoryById: function (idCategoria, idSubcategory) {
            return axios.get(`${baseUrl}/${idCategoria}/${idSubcategory}`)
        },

        getProductById: function (idCategoria, idSubcategory, idProduct) {
            return axios.get(`${baseUrl}/${idCategoria}/${idSubcategory}/${idProduct}`)
        }
    }

})()

module.exports = apiClient