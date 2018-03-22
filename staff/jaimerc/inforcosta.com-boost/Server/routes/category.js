const logic = require('../logic')
const express = require('express')
const routes = express.Router()

//Listar todas las Categorias
routes.route('/')
    .get((req, res) => {
        logic.getAllCategories()
            .then(categories => {
                res.json({
                    status: "OK",
                    message: "Listados de todas las Categorias",
                    data: categories
                })
            })
            .catch(err => {
                res.json({
                    status: "KO",
                    message: err.message
                })
            })
    })

//Listar todas las subcategorias
routes.route('/subcategories')
    .get((req, res) => {
        logic.getTotalSubcategories()
            .then(subcategories => {
                res.json({
                    status: "OK",
                    message: "Listados de todas las Subategorias",
                    data: subcategories
                })
            })
            .catch(err => {
                res.json({
                    status: "KO",
                    message: err.message
                })
            })
    })


//Listar Subcategoria segun Categoria
routes.route('/:category')
    .get((req, res) => {
        const { params: { category } } = req

        logic.getSubcategoryByCategoryId(category)
            .then(category => {
                res.json({
                    status: "OK",
                    message: `Categoria ${category.CATEGORIA}`,
                    data: category
                })
            })
            .catch(err => {
                res.json({
                    status: "KO",
                    message: err.message
                })
            })
    })

//Mostrar Subcategoria segun su id
routes.route('/subcategories/:subcategory')
    .get((req, res) => {
        const { params: { subcategory } } = req

        logic.getSubcategoryById(subcategory)
            .then(data => {
                res.json({
                    status: "OK",
                    message: `Subcategoria ${data}`,
                    data: data
                })
            })
            .catch(err => {
                res.json({
                    status: "KO",
                    message: err.message
                })
            })
    })



routes.route('/search/:q')
    .get((req, res) => {
        const { params: { q } } = req

        logic.getCategorySearch(q)
            .then(categories => {
                res.json({
                    status: "OK",
                    message: 'Todas las Categorias encontradas',
                    data: categories
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
