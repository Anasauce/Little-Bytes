import express from 'express'

const router = express.Router()

router.get('/', (request, response) =>
  response.render('landingpage')
)

router.get('/learnmore', (request, response) => {
  console.log('this is working')
  response.render('learnmore')
})


export default router
