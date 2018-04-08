const axios = require('axios')

const api = {

    baseUrl() {
        //return `${this.protocol}://${this.host}:${this.port}`
        return 'http://localhost:8080'

    },

    //Obtener los productos de ofertas
    getOffersProducts() {
        return axios.get(`${this.baseUrl()}/products/offers`).then(res => res.data)
    },

    //Obtener todas las Categorias
    getCategory() {
        return axios.get(`${this.baseUrl()}/categories`).then(res => res.data)
    },

    //Obtener las categorias segun su Id ****
    getCategoryById(idCategory) {
        return axios.get(`${this.baseUrl()}/${idCategory}`)
    },

    //Obtener todas las subcategorias  *****
    getSubcategory(idCategory) {
        return axios.get(`${this.baseUrl()}/${idCategory}`)
    },

    //Obtener los productos segun su la id de subcategoria *****
    getProductsBySubategory(idSubcategoria) {
        return axios.get(`${this.baseUrl()}/products/subcategories/${idSubcategoria}`).then(res => res.data)
    },

    //Obtener los productos segun su Id
    getProductById(idProduct) {
        return axios.get(`${this.baseUrl()}/products/retrieve/${idProduct}`).then(res => res.data)
    },

    //Obtener todos los productos segun la busqueda
    getProductBySearch(query) {
        return axios.get(`${this.baseUrl()}/products/search/${query}`).then(res => res.data)
    },

    //Obtener todos los productos segun la categoria
    getProductByCategory(idCategory) {
        return axios.get(`${this.baseUrl()}/products/${idCategory}`).then(res => res.data)
    },

    //Obtener 5 productos alternativos segun la id de Subcategoria
    getAlternativesProducts(idSubcategory) {
        return axios.get(`${this.baseUrl()}/products/alternatives/${idSubcategory}`).then(res => res.data)
    },

    //Validar Usuario con username y password
    validateUser(username, password) {
        return axios.post(`${this.baseUrl()}/users/login`, { username, password }).then(res => res.data)
    },

    //Crear usuario
    createUser(name, surname, address1, address2, telf, email, nif, username, password) {
        return axios.post(`${this.baseUrl()}/users/create`, { name, surname, address1, address2, telf, email, nif, username, password })
            .then(res => res.data)
    },

    //Recuperar la contraseña
    recovery(email) {
        return axios.post(`${this.baseUrl()}/users/recovery`, { email }).then(res => res.data)
    },

    //Obtener los datos del usuario
    getUser(token) {
        return axios.get(`${this.baseUrl()}/users/user`, { headers: { Authorization: `Bearer ${token}` } }).then(res => res.data)
    },

    //Crear un pedido por Usuario
    setOrderByUser(order, token) {
        return axios.post(`${this.baseUrl()}/orders/create`, { order }, { headers: { Authorization: `Bearer ${token}` } }).then(res => res.data)
    },

    //Obtener todos los pedidos del usuario
    getOrderByUser(token){
        return axios.get(`${this.baseUrl()}/orders/create`, { headers: { Authorization: `Bearer ${token}` } }).then(res => res.data)
    }
}


module.exports = api