'use strict'

const mongoose = require('mongoose');
     
const ArticleSchema = new mongoose.Schema({
    
            id :  { 
                  
                 type :String,
                  
                  required : true,

                  unique: true
                  
            },
            tags : { 
                  
                 type : [String],
                  
                  required : false,

            },
           publisher : { 
                  
                  type :String,
                   
                   required : true,
                   
            },
           publishedAt : {
                  
                 type :String,

                  required : true,

                  unique : false

            },
            author : {
                  
                 type :String,

                  required : false

            },
            title : {
                  
                 type :String,

                  required : false,

            },
            description : {
                  
                 type :String,
       
                  required : false
            
            },      
            urlToImage : {
                  
                 type :String
            }
       })

module.exports =  mongoose.model('Article', ArticleSchema) 