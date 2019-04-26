require('dotenv').config()
const express = require('express')
const MongoClient = require('mongodb').MongoClient
const app = express()
const bodyParser = require('body-parser')
const formBodyParser = bodyParser.urlencoded({ extended: false })
var ObjectId = require('mongodb').ObjectID;
app.set('view engine', 'pug')
//app.set('views', './views')

console.log("hellooo")


MongoClient.connect('mongodb://localhost:27017/bootcamp', (err,connection) => {
     if(err) throw Error

     const db = connection.db('bootcamp')// usame la base de datos bootcamp

     
        // mostramos los usuarios de la tabla o documento users
        app.get('/', (req, res) => {
            db.collection('users').find().toArray((err,data) => {

                let show = req.query.show
                let updateData = data.map(userItem => {
                    userItem.showForm = (userItem._id == show)
                    return userItem
                })
                res.render('index',{updateData})
            })
        })


        
        app.post('/register',formBodyParser, (req,res) => {
            const { name,surname,email,username,password } = req.body

            if(!name){
                console.log("You must insert data")
            }else{
                db.collection('users').insert({ name:name, surname:surname, email:email, username:username, password:password })
            }                      
            res.redirect('/')
        })



        app.get('/remove/:id',(req,res) => {

            const id = req.params.id
            db.collection('users').remove({"_id" : ObjectId(id)})

            //res.render('index',{data})
            res.redirect('/')
        })



       app.post('/update/:id',formBodyParser,(req,res) => {
            const id = req.params.id
            const { name,surname,email,username,password } = req.body
            //console.log(req.body)
            db.collection('users').updateOne({"_id":ObjectId(id)},{$set:{name:name,surname:surname, email:email, username:username, password:password}})
            res.redirect('/')
        })

    
    

     const port = process.env.PORT
     app.listen(port, ()=> console.log(`server running on port ${port}`))

     process.on('SIGINT', () => { //interrumpe el proceso
         console.log('stopping server')
         connection.close()
         process.exit()//cerramos el proceso
     })

 })