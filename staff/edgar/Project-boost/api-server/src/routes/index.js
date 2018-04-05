'use strict'

const express=require('express'),
      
      articleController = require('../controllers/article'),

      api = express.Router()

//fetch all to client
api.get('/articles/getAll',  articleController.getAll ) 

//send all to BBDD and save
api.post( '/article/saveAll' ,  articleController.saveAll )

//delete article from BBDD ( only in monouser app ) ??? TODO ( multiuser ) 
api.delete('/article/:id/delete',  articleController.deleteArticle )

module.exports = api