const express = require('express')
const http = require('http')
const path = require('path')
const app = express()
const index = require('./routes/index.js')
const database = require('./database/index.js')

app.use('/', index)


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

module.exports = app
