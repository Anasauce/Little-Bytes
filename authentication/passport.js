import passport from 'passport'
import { Strategy } from 'passport-local'
import { findUser, findUserById } from '../database/queries/users'

const verify = ( email, password, next ) =>
  findUser( email, password)
    .then( user => next(null, user ? user : false ))
    .catch(error => next( error ))


const userNameField = 'email'
const passwordField = 'password'

passport.use(new Strategy( { userNameField, passwordField }, verify ))

passport.serializeUser(( user, next ) => next( null, user.id ))
passport.deserializeUser(( id, next ) =>
  findUserById( id )
    .then( user => {
      const { id, email } = user
      next( null, { id, email })
    })
    .catch( error => next( error ))
)

export default passport
