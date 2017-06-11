import express from 'express'

const router = express.Router()

router.get('/', (request, response) =>
  response.render('landingpage')
)

export default router

// response.send(`SESSION: ${JSON.stringify(request.session, null, 2)}`)
