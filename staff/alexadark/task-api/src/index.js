require('dotenv').config()
const express = require('express')

const _ = require('lodash')
const app = express()

const taskRouter = require('./api/taskRouter')

app.use('/api', taskRouter)
const port = process.env.PORT




app.listen(port, () => console.log(`tasks API running on port ${port}`))