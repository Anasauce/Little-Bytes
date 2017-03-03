const passport = require('passport')
import { Strategy } from 'passport-local'
import { findUserByEmail, findUserById } from '../database/queries/users'

const verify = ( email, password, done ) =>
  findUserByEmail( email )
    .then( user => {
      console.log('user in AUTH!', user)

      done(null, user ? user : false )
    })
    .catch( error => done( error ))


const userNameField = 'email'
const passwordField = 'password'

passport.serializeUser(( user, done ) => done( null, user.id ))

passport.deserializeUser(( id, done ) => {
  findUserById( id )
    .then( user => {
      done( null, user)
    })
    .catch( error => {
      done( error )
    })
})


passport.use(new Strategy( { userNameField, passwordField }, verify ))

module.exports = passport
