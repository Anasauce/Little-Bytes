import { createSalt, hashPassword, comparePassword } from '../../authentication/hashPassword'
import * as util from './util'

export default createUser = attributes => {
  return createSalt( attributes.password )
    .then( hashPassword )
    .then( hash =>  {
      attributes.password = hash
      return util.createRecord('users', attributes)
    })
}


export default { createUser }
