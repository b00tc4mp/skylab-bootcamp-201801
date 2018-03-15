const logicProduct = require('./logic_product')
const express = require('express')
const productRoute = express.Router()


//Listar todos los productos
productRoute.route('/')
    .get((req, res) => {
        logicProduct.getTotalProducts()
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
productRoute.route('/retrieve/:article')
    .get((req, res) => {
        const { params: { article } } = req
        logicProduct.getProductByArticle(article)
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
productRoute.route('/subcategory/:subcategory')
    .get((req, res) => {
        const { params: { subcategory } } = req

        logicProduct.getProductBySubcat(subcategory)
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

//Listar 4 productos de todos los productos (sustituye a los 4 productos de oferta)
productRoute.route('/offers')
    .get((req, res) => {

        logicProduct.getOffers()
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
productRoute.route('/search/:q')
    .get((req, res) => {
        const { params: { q } } = req

        logicProduct.getProductSearch(q)
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

module.exports = productRoute

