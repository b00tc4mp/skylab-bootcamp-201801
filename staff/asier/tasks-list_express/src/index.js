/**
 * Tasks API
 * 
 * @version 1.0.0
 */

require('dotenv').config()

const express = require('express')

const tasksRouter = require('./api/tasksRouter')

const app = express()

app.use('/api', tasksRouter)


const port = process.env.PORT

app.listen(port, () => console.log(`tasks API running on port ${port}`))