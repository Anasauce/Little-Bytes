import { createSalt, hashPassword } from '../../authentication/hashPassword'
import { createRecord } from '../rootKnexFunctions'

export const createUser = attributes =>
  createSalt( attributes.password )
    .then( hashPassword )
    .then(({ hash, salt }) => {
      attributes.password = hash
      attributes.salt = salt
      return createRecord( 'users', attributes )
    })
    .catch( error => { console.log( 'failed to create new user' )} )
