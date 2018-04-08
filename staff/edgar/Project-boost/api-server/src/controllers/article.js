'use strict'
const mongoose = require('mongoose')
const  Article  = require('../models');

const getAll = ( req, res , next) =>{
    
    Article.find( {} , { _id:0 , __v:0 }, ( err, articles ) => {
 
    if( err ) return res.status( 500 ).send({ message: `Error : ${err}`})
      
    if(!articles) return res.status( 404 ).send({ message: `No saved articles found`})
   
    return res.status( 200 ).send( articles )

    })

}
const saveAll = ( req , res , next) => {

    let _r = req.body,
        article = new Article();

        article.id          = _r.id
        article.tags        = _r.tags
        article.publisher   = _r.publisher
        article.publishedAt = _r.publishedAt
        article.author      = _r.author
        article.title       = _r.title
        article.description = _r.description
        article.urlToImage  = _r.urlToImage

   
        article.save(( err, articleStored ) =>{
        
        if ( err ) return res.status( 500 ).send( { message : `Unable to save article ${ article.id }, seems that exist!!!`});
        
        return res.status(200).send( { message : 'All articles are saved' } )
    })
}

const deleteArticle = ( req, res ) => {
   
    let articleId = req.params.id
      
  
     Article.find( { articleId } , ( err , article ) => {
       
        Article.remove( err => {
          
            if( err ) return res.status( 500 ).send({ message : `Error: unable to delete article: ${err}`})
        
            return res.status( 200 ).send({ message: `Article removed succeful`})

        })
     })
}

module.exports = {  saveAll,  getAll,   deleteArticle }