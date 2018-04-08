const logic = require('../logic')
const express = require('express')
const routes = express.Router()


//Listar todos los productos
routes.route('/')
    .get((req, res) => {
        logic.getTotalProducts()
            .then(products => {
                res.json({
                    status: "OK",
                    message: "Listados de todos los productos",
                    data: products
                })
            })
            .catch(err => {
                res.json({
                    status: "KO",
                    message: err.message
                })
            })
    })


//Listar por codigo de ariculo
routes.route('/retrieve/:article')
    .get((req, res) => {
        const { params: { article } } = req

        logic.getProductByArticle(article)
            .then(product => {
                res.json({
                    status: "OK",
                    message: `Producto ${product.ARTICULO}`,
                    data: product
                })
            })
            .catch(err => {
                res.json({
                    status: "KO",
                    message: err.message
                })
            })
    })
//Listar productos por subcategorias
routes.route('/subcategories/:subcategory')
    .get((req, res) => {
        const { params: { subcategory } } = req

        logic.getProductBySubcat(subcategory)
            .then(products => {
                res.json({
                    status: "OK",
                    message: `Productos de la Subcategoria ${subcategory}`,
                    data: products
                })
            })
            .catch(err => {
                res.json({
                    status: "KO",
                    message: err.message
                })
            })
    })

//Listar 8 productos de todos los productos (sustituye a los 8 productos de oferta)
routes.route('/offers')
    .get((req, res) => {

        logic.getOffers()
            .then(products => {
                res.json({
                    status: "OK",
                    message: `Productos en Promocion`,
                    data: products
                })
            })
            .catch(err => {
                res.json({
                    status: "KO",
                    message: err.message
                })
            })

    })

//Busca la "query" en los campos de Descripcion y Shortdescription de todos los productos
routes.route('/search/:q')
    .get((req, res) => {
        const { params: { q } } = req

        logic.getProductSearch(q)
            .then(products => {
                res.json({
                    status: "OK",
                    message: `Productos encontrados con la palabra ${q}`,
                    data: products
                })
            })
            .catch(err => {
                res.json({
                    status: "KO",
                    message: err.message
                })
            })
    })
//Lista todos los productos segun la Categoria
routes.route('/:idCategory')
    .get((req, res) => {
        const { params: { idCategory } } = req

        logic.getProductByIdCategory(idCategory)
            .then(products => {
                res.json({
                    status: "OK",
                    message: `Todas las Productos de la categoria ${idCategory} encontradas`,
                    data: products
                })
            })
            .catch(err => {
                res.json({
                    status: "KO",
                    message: err.message
                })
            })
    })



routes.route('/alternatives/:idSubcategory')
    .get((req, res) => {
        const { params: { idSubcategory } } = req

        logic.getAlternativesProducts(idSubcategory)
            .then(products => {
                res.json({
                    status: "OK",
                    message: `Estos son los 5 productos alternativos de la Subcategoria ${idSubcategory}`,
                    data: products
                })
            })
            .catch(err => {
                res.json({
                    status: "KO",
                    message: err.message
                })
            })
    })
module.exports = routes

