import {createSalt, hashPassword, comparePassword} from '../../authentication/hashPassword'
import { findRecord } from '../rootKnexFunctions'

export const findUserById = id => findRecord('users', 'id', id)

export const findUserByCredentials = (email, password) =>
  findRecord('users', 'email', email)
    .then(user => comparePassword(password, user))
    .catch(error => {message: 'Email/Username or Password are incorrect'})
