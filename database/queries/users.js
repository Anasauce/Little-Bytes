import { createSalt, hashPassword, comparePassword } from '../../authentication/hashPassword'
import * as util from './util'

const createUser = attributes => {
  return createSalt( attributes.password )
    .then( hashPassword )
    .then( hash =>  {
      attributes.password = hash
      return util.createRecord('users', attributes)
    })
}

const findUserById = id =>
  util.findRecord( 'users', 'id', id )

const findUserByEmail = ( email, password ) =>
  util.findRecord( 'users', 'email', email )
    .then( user => {
      console.log('user in quiref!', user)
      comparePassword( password, user )
    })
    .catch(error => console.log('error:', error))

export {
  createUser,
  findUserById,
  findUserByEmail
}
