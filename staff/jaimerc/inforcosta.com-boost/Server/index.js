require('dotenv').config()

const host = process.env.MONGO_HOST
const portMongo = process.env.MONGO_PORT
const database = process.env.MONGO_DB
const port = process.env.PORT

const productRoute = require('./products/route_product')
const categoryRoute = require('./categories/route_category')
const orderRoute = require('./orders/route_order')
const userRoute = require('./users/route_user')

const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

const mongoose = require('mongoose')

//Cors
app.use((req, res, next) => {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

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
