'use strict';

var axios = require('axios');

var api = {
    baseUrl: function baseUrl() {
        //return `${this.protocol}://${this.host}:${this.port}`
        return 'http://localhost:8080';
    },


    //Obtener los productos de ofertas
    getOffersProducts: function getOffersProducts() {
        return axios.get(this.baseUrl() + '/products/offers').then(function (res) {
            return res.data;
        });
    },


    //Obtener todas las Categorias
    getCategory: function getCategory() {
        return axios.get(this.baseUrl() + '/categories').then(function (res) {
            return res.data;
        });
    },


    //Obtener las categorias segun su Id ****
    getCategoryById: function getCategoryById(idCategory) {
        return axios.get(this.baseUrl() + '/' + idCategory);
    },


    //Obtener todas las subcategorias  *****
    getSubcategory: function getSubcategory(idCategory) {
        return axios.get(this.baseUrl() + '/' + idCategory);
    },


    //Obtener los productos segun su la id de subcategoria *****
    getProductsBySubategory: function getProductsBySubategory(idSubcategoria) {
        return axios.get(this.baseUrl() + '/products/subcategories/' + idSubcategoria).then(function (res) {
            return res.data;
        });
    },


    //Obtener los productos segun su Id
    getProductById: function getProductById(idProduct) {
        return axios.get(this.baseUrl() + '/products/retrieve/' + idProduct).then(function (res) {
            return res.data;
        });
    },


    //Obtener todos los productos segun la busqueda
    getProductBySearch: function getProductBySearch(query) {
        return axios.get(this.baseUrl() + '/products/search/' + query).then(function (res) {
            return res.data;
        });
    },


    //Obtener todos los productos segun la categoria
    getProductByCategory: function getProductByCategory(idCategory) {
        return axios.get(this.baseUrl() + '/products/' + idCategory).then(function (res) {
            return res.data;
        });
    },


    //Obtener 5 productos alternativos segun la id de Subcategoria
    getAlternativesProducts: function getAlternativesProducts(idSubcategory) {
        return axios.get(this.baseUrl() + '/products/alternatives/' + idSubcategory).then(function (res) {
            return res.data;
        });
    },


    //Validar Usuario con username y password
    validateUser: function validateUser(username, password) {
        return axios.post(this.baseUrl() + '/users/login', { username: username, password: password }).then(function (res) {
            return res.data;
        });
    },


    //Crear usuario
    createUser: function createUser(name, surname, address1, address2, telf, email, nif, username, password) {
        return axios.post(this.baseUrl() + '/users/create', { name: name, surname: surname, address1: address1, address2: address2, telf: telf, email: email, nif: nif, username: username, password: password }).then(function (res) {
            return res.data;
        });
    },


    //Recuperar la contraseña
    recovery: function recovery(email) {
        return axios.post(this.baseUrl() + '/users/recovery', { email: email }).then(function (res) {
            return res.data;
        });
    },


    //Obtener los datos del usuario
    getUser: function getUser(token) {
        return axios.get(this.baseUrl() + '/users/user', { headers: { Authorization: 'Bearer ' + token } }).then(function (res) {
            return res.data;
        });
    },


    //Crear un pedido por Usuario
    setOrderByUser: function setOrderByUser(order, token) {
        return axios.post(this.baseUrl() + '/orders/create', { order: order }, { headers: { Authorization: 'Bearer ' + token } }).then(function (res) {
            return res.data;
        });
    },


    //Obtener todos los pedidos del usuario
    getOrderByUser: function getOrderByUser(token) {
        return axios.get(this.baseUrl() + '/orders/create', { headers: { Authorization: 'Bearer ' + token } }).then(function (res) {
            return res.data;
        });
    }
};

module.exports = api;
