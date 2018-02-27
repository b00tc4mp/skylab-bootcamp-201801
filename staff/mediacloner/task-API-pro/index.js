require('dotenv').config()

const express = require('express')

const taskRouter = require('./src/api/taskRouter')

const app = express()

app.use('/api', taskRouter)

const port = process.env.PORT

app.listen(port, () => console.log(`Users API running on port ${port}`))