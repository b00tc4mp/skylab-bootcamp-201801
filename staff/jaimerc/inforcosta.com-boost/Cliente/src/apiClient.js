const axios = require('axios')

let apiClient; // NOTE api instead of apiClient? simpler...

(function () {

    const baseUrl = 'http://localhost:8080'

    apiClient = {

        //Obtener los productos de ofertas
        getOffersProducts: function () {
            return axios.get(`${baseUrl}/products/offers`).then(res => res.data)
        },

        //Obtener todas las Categorias
        getCategory: function () {
            return axios.get(`${baseUrl}/categories`)
        },

        //Obtener las categorias segun su Id
        getCategoryById: function (idCategory) {
            return axios.get(`${baseUrl}/${idCategory}`)
        },

        //Obtener todas las subcategorias
        getSubcategory: function (idCategory) {
            return axios.get(`${baseUrl}/${idCategory}`)
        },

        //Obtener las subcategorias segun su Id
        getSubategoryById: function (idSubcategoria) {
            return axios.get(`${baseUrl}/products/subcategory/${idSubcategoria}`)
        },

        //Obtener los productos segun su Id
        getProductById: function (idProduct) {
            return axios.get(`${baseUrl}/products/retrieve/${idProduct}`)
        },

        //Obtener todos los productos segun la busqueda
        getProductBySearch(query) {
            return axios.get(`${baseUrl}/products/search/${query}`)
        },

        //Validar Usuario con username y password
        validateUser(username, password) {
            return axios.post(`${baseUrl}/users/login`, { username, password })
                .then(data => {
                    
                    this.setToken(data.data.data.token)

                    return data.data
                })
        },

        createUser(name, surname, address1, address2, telf, email, nif, username, password) {
            return axios.post(`${baseUrl}/users/create`, { name, surname, address1, address2, telf, email, nif, username, password })
        },

        recovery(email) {
            return axios.post(`${baseUrl}/users/recovery`, { email })
        },

        getUser(token) {
            return axios.post(`${baseUrl}/users/user`, undefined, this.getAuth(token))
        },

        getAuth(token) {
            if (token)
                return ({
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
        },

        setToken(token) {
            localStorage.setItem('token', token)
        },

        getToken() {
            return localStorage['token']
        }
    }

})()

module.exports = apiClient

