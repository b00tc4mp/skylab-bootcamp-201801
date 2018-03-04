/**
 * Users Api on MongoDB
 * @version 1.0.0
 */

require('dotenv').config()
const express = require('express')
const { MongoClient } = require('mongodb')

const bodyParser = require('body-parser');
const jsonBodyParser = bodyParser.json();
const userID = require('mongodb').ObjectID

const app = express()


app.set('view engine', 'pug')

function isValidEmail(mail) { 
    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(mail); 
  }



// CONECTAMOS CON LA BBDD

MongoClient.connect('mongodb://localhost:27017', (err, database) => {
    if (err) throw err

    const db = database.db('usersDB') // SI NO EXISTE, SE CREA LA BBDD 'userDB'

    function validateUser(name,password) {
        db.collection('users').find({"name":name, "password":password}).toArray((err,data) => {
            return name
        })
        
    }
    
    // LIST USERS
    
    app.get('/', (req,res) => {
        const query = req.query.q || req.query.query || ''

        db.collection('users').find().toArray((err,data) => {

            users = data
            edit = new Array()
            error = new Array()
            user = new Array()
            
            res.render('index',{users, edit, error})
        })
    })

    // CREATE USER

    const formBodyParser = bodyParser.urlencoded({ extended: false })

    app.post('/', formBodyParser, (req, res) => {
        const { name, surname, email, username, password } = req.body

        if (!isValidEmail(email)) {

            user = [{name,surname,email,username}]
            error = [{"error": "Invalid e-mail"}]
            edit = new Array()

            res.render('index',user )
        }else if (!validateUser(name,password)) {
            user = [{name,surname,email,username}]
            error = [{"error": `A user "${name}" with this password already exists`}]
            edit = new Array()

            res.render('index',user )
        }else{
            db.collection('users').insert({ name, surname, email, username, password })
        
            res.redirect('/')
        }
})

    // EDIT USER

    app.get('/user/:id/edit', (req,res) => {
        const { params: { id } } = req
       
        db.collection('users').find({"_id":userID(id)}).toArray((err,data) => {
            edit = data
            res.render('index',{users, edit})
        })
    })

    // UPDATE USER

    app.post('/user/update', formBodyParser, (req, res) => {
        const { body: { id, name, surname, email, username } } = req

        db.collection('users').update(
            {"_id": userID(id)},
            {$set: {name,surname,email,username}}
            )
        res.redirect('/')
    })

    // DELETE USER

    app.get('/user/:id/delete', (req,res) => {
        const { params: { id } } = req
        db.collection('users').remove( { "_id": userID(id) } )
        res.redirect('/')
    })

    // SEARCH USER

    app.post('/search', formBodyParser, (req,res) => {
        const { body: { search } } = req

        if (!search) res.redirect('/')

        db.collection('users').find( { "name": search } ).toArray((err,data) => {
        users = data
        edit = new Array() 
        res.render('index', {users,edit})
        })
    })
  
    const port = process.env.PORT

    app.listen(port, () => console.log(`server running on port ${port}`))

    process.on('SIGINT', () => {
        console.log('stopping server')

        db.close()

        process.exit()
    })
})