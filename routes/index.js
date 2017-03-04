import express from 'express'

const router = express.Router()

router.get('/', (request, response) =>
  response.send(`SESSION: ${JSON.stringify(request.session, null, 2)}`)
)

export default router
