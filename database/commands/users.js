import { createSalt, hashPassword } from '../../authentication/hashPassword'
import { createRecord } from '../rootKnexFunctions'

export const createUser = attributes =>
  createSalt(attributes.password)
    .then(hashPassword)
    .then(hash => {
      attributes.password = hash
      return createRecord('users', attributes)
    })
    .catch(error => {message: 'failed to create new user'})
