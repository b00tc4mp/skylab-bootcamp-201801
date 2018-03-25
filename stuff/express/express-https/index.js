require('dotenv').config()

const fs = require('fs')
const http = require('http')
const https = require('https')
const privateKey = fs.readFileSync('ssl/server.key', 'utf-8')
const certificate = fs.readFileSync('ssl/server.crt', 'utf-8')
const secret = fs.readFileSync('ssl/passphrase.txt', 'utf-8')

const credentials = { key: privateKey, cert: certificate, passphrase: secret }
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.end('ok')
})

const httpServer = http.createServer(app)
const httpsServer = https.createServer(credentials, app)

const { PORT, PORT_SSL } = process.env

httpServer.listen(PORT, () => console.log(`running http server on port ${PORT}`)) // TRY http://localhost:8080
httpsServer.listen(PORT_SSL, () => console.log(`running https server on port ${PORT_SSL}`)) // TRY https://localhost:8443