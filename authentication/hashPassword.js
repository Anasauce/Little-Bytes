import bcrypt from 'bcrypt'
const saltRounds = 10

export const createSalt = password =>
  new Promise ((resolve, reject) =>
    bcrypt.genSalt(saltRounds, (error, salt) => {
      if (error) reject(error)
      resolve([salt, password])
    })
  )

export const hashPassword = saltResult => {
  const [salt, password] = saltResult
  return new Promise((resolve, reject) =>
    bcrypt.hash(password, salt, (error, hash) => {
      if (error) reject(error)
      resolve(hash)
    })
  )
}

export const comparePassword = (password, user) =>
  new Promise((resolve, reject) =>
    bcrypt.compare( password, user.password, (error, result) => {
      if (error) reject(error)
      resolve( result ? user : null )
    })
  )
