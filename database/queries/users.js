import {createSalt, hashPassword, comparePassword} from '../../authentication/hashPassword'
import {createRecord, findRecord} from './util'

export const createUser = attributes =>
  createSalt(attributes.password)
    .then(hashPassword)
    .then(hash => {
      attributes.password = hash
      return createRecord('users', attributes)
    })

export const findUserById = id => findRecord('users', 'id', id)

export const findUserByCredentials = (email, password) =>
  findRecord('users', 'email', email)
    .then(user => comparePassword(password, user))
    .catch(error => {message: 'Email/Username or Password are incorrect'})
