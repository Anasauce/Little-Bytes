const express = require('express')
const http = require('http')
const path = require('path')
const app = express()
const session = require('express-session')
const index = require('./routes/index.js')
const users = require('./routes/users.js')
const database = require('./database/index.js')
const bodyParser = require('body-parser')
const passport = require('./authentication/passport')

app.use( bodyParser.json() )
app.use( bodyParser.urlencoded({ extended: true }) )

app.use(session({ secret: 'secret cookie life', cookie: {} }))
app.use( passport.initialize() )
app.use( passport.session() )

passport.serializeUser(( user, done ) => {
  console.log( "USER!!!!!!!!!!!", user )
  return done( null, user.id )})


passport.deserializeUser(( id, done ) =>
  database.findUserById( id )
    .then( user => {
      const { id, email } = user
      done( null, { id, email })
    })
    .catch( error => done( error ))
)

app.use('/', index)
app.use('/users', users)


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

module.exports = app
