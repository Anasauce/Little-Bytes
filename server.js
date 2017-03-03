import express from 'express'
import path from 'path'
import session from 'express-session'
import bodyParser from 'body-parser'

import passport from './authentication/passport'
import users from './routes/users.js'
import index from './routes/index.js'

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(session({secret: 'secret cookie life', cookie: {}}))
app.use(passport.initialize())
app.use(passport.session())

app.use('/', index)
app.use('/users', users)
 
export default app
