import passport from 'passport'
import {Strategy} from 'passport-local'
import {findUserByCredentials, findUserById} from '../database/queries/users'

const verify = (email, password, done) =>
  findUserByCredentials(email, password)
    .then(user => done(null, user ? user : false))

passport.serializeUser((user, done) => done( null, user.id ))

passport.deserializeUser((id, done) =>
  findUserById(id).then(user => done( null, user))
)

passport.use(new Strategy({
  usernameField: 'email',
  passwordField: 'password'
  },
  verify
))

export default passport
