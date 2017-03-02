import express from 'express'
import database from '../database/queries/users'
import passport from '../authentication/passport'
const router = express.Router()

const authResponse = {
  sucessRedirect: '/',
  failureRedirect: '/users/login'
}

router.get( '/login', ( request, response) => {
  response.render( 'auth/login' )
})

router.post( '/login', passport.authenticate( 'local', authResponse ))

router.get( '/signup', ( request, response) => {
  response.render( 'auth/signup' )
})

router.post( '/signup', ( request, response, next ) => {
  const { email, password } = request.body

  database.createUser({ email, password })
    .then( user => {
      request.login({ id: user.id, email }, error => {
        error ? next( error ) : response.redirect( '/' )
      })
    })
    .catch( error => {
      console.log( 'error', error )
      response.render(
        'auth/signup',
        { message: 'Oops! That email address is not available!' }
      )
    })
})

router.get( '/logout', (request, response ) => {
  request.logout()
  response.redirect( '/' )
})

module.exports = router
