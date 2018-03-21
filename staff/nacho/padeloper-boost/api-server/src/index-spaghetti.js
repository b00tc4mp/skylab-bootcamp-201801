require('dotenv').config()
const express = require('express')
const uuid = require('uuid/v1')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const {User,League,Team,Match,Result,Game} = require('./models');
const router = express.Router()
const jsonBodyParser = bodyParser.json()
const host = process.env.MONGO_HOST
const mongoport = process.env.MONGO_PORT
const db = process.env.MONGO_DB

mongoose.connect(`mongodb://${host}:${mongoport}/${db}`)
console.log(`mongodb://${host}:${mongoport}/${db}`)
const app = express();
app.use(cors())
app.use('/api',router)




/*************************************************************+RETRIEVE USER BY ID *************************************************************** */


router.get('/user/:id',(req,res) => {
    // const {params: { id }} = req
    const id = req.params.id
    User.find({_id:id.toString()})
        .then(data =>{
            
            res.json(success('Usuario cargado correctamente',data))
        })
})




/*************************************************************+LIST USERS *************************************************************** */

router.get('/users', (req,res) => {
    User.find({},{_id:1,name:1,surname:1,email:1,username:1})
        .then(data => {
            res.json(success(data))
        })
})



/*************************************************************+CREATE USER *************************************************************** */

function validate(user) {
    for (const prop in user) {
        const value = user[prop]

        if (typeof value === 'undefined') throw Error(`${prop} cannot be undefined or empty`)
    }
}

router.post('/user',jsonBodyParser,(req,res) => {

    const {body: {name,surname,email,username,password}} = req
    //console.log(name,surname,email,username,password)
    Promise.resolve()

    .then(() => {
        validate({name,surname,email,username,password})
        return User.findOne({name})
    })

    .then( user => {
        if (user) throw Error(`${email} already exists`)
        const id = uuid()
        return User.create({name,surname,email,username,password})
            .then(() => id)
    })

    .then(id => {
        res.json(success({name,surname,email,username}))
    })

    .catch(err => {
        res.json(fail(err.message))
    })

})


/*************************************************************+LIST LEAGUES *************************************************************** */

router.get('/leagues',(req,res) => {
    League.find({},{_id:1,creator:1,name:1,city:1,club:1,type:1,category:1,maxplayers:1,created:1})
        .then(data =>{
            res.json(success('Ligas listadas correctamente',data))
        })
})
/*************************************************************+CREATE LEAGUES *************************************************************** */

function validate(league) {
    for (const prop in league) {
        const value = league[prop]

        if (typeof value === 'undefined') throw Error(`${prop} cannot be undefined or empty`)
    }
}


router.post('/league',jsonBodyParser,(req,res) => {
    
    const {body: {creator,name,city,club,type,category,maxplayers,created}} = req

    
    Promise.resolve()

        .then(() => {
            validate({ creator,name,city,club,type,category})

            return League.findOne({ name })
        })

        .then(league => {
            if (league) throw Error(`${name} already exists`)

            const created = new Date()
            return League.create({creator,name,city,club,type,category,maxplayers,created})
                .then(() => name)
        })

        .then(id => {
            res.json(success({creator,name,city,club,type,category,maxplayers,created}))
        })

        .catch(err => {
            res.json(fail(err.message))
        })
})



const port = process.env.PORT
app.listen(port, () => console.log(`server running on port ${port}`))

function success(message,item){

    const res = {status:'ok', message}

    if(item) res.item = item

    return res
}

function fail(message,error){

    const res = {status:'ko', message}

    if(error) res.error = error

    return res
}