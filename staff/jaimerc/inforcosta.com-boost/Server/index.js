require('dotenv').config()

const host = process.env.MONGO_HOST
const portMongo = process.env.MONGO_PORT
const database = process.env.MONGO_DB
const port = process.env.PORT

const hostClient = process.env.HOST_CLIENT
const protocolClient = process.env.PROTOCOL_CLIENT
const portClient = process.env.PORT_CLIENT

const productRoute = require('./routes/product')
const categoryRoute = require('./routes/category')
const orderRoute = require('./routes/order')
const userRoute = require('./routes/user')
const passport = require('passport')

const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

const mongoose = require('mongoose')

app.use(passport.initialize())


//`${protocolClient}://${hostClient}:${portClient}` 'http://localhost:3000',`${protocolClient}://${hostClient}:${portClient}`
//Cors
app.use((req, res, next) => {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Authorization');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
})

app.use('/products', productRoute)

app.use('/categories', categoryRoute)

app.use('/orders', orderRoute)

app.use('/users', userRoute)


mongoose.Promise = global.Promise
mongoose.connect(`mongodb://${host}:${portMongo}/${database}`)
app.listen(port, () => console.log(`Server runnig in port ${port}`))