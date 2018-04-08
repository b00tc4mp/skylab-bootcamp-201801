require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const router = require('./routes')

const mongo = {
    host: process.env.MONGO_HOST,
    port: process.env.MONGO_PORT,
    database: process.env.MONGO_DB,
    collection: process.env.MONGO_COL
}

with (mongo) {
    mongoose.connect(`mongodb://${host}:${port}/${database}`)
        .then(() => {

            const app = express()

            app.use('/api', router)

            app.use(cors())

            const port = process.env.PORT

            app.listen(port, () => console.log(`this server is connect in port ${port}`))

        })
        .catch(err => {
            console.error('App started error:', err.stack);
            process.exit(1);
        })
}