'use strict'

const express = require('express'),

      cors = require('cors'),

      bodyParser = require('body-parser'),

      app = express(),

      api = require('./routes'),

      articleController = require('./controllers');


app.use(cors())

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: false }))

//Endpoints and Error handler

app.use('/api', api)

app.all('*', (req, res, next) => {

      const err = new Error('Not found')

      err.status = 404

      next(err)

})

app.use(errorHandler)

function errorHandler(err, req, res, next) {

      if (res.headerSent) return next(err);

      res.status(500).send({ message: `${err.message}` });

}

module.exports = app