const express = require('express')
const http = require('http')
const path = require('path')
const app = express()
const index = require('./routes/index.js')
const users = require('./routes/users.js')
const database = require('./database/index.js')
const bodyParser = require('body-parser')

app.use( bodyParser.json() )
app.use( bodyParser.urlencoded({ extended: true }) )

app.use('/', index)
app.use('/users', users)


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

module.exports = app
