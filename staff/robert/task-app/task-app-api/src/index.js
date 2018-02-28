/**
 * Task APP API
 * 
 * @version 1.0.0
 */

 require('dotenv').config()

 const express = require('express')
 
 const taskRouter = require('./api/taskRouter')

 const app = express()

 app.use('/api', taskRouter)

 const port = process.env.PORT

 app.listen(port,()=> console.log(`Task API running on port ${port}`))