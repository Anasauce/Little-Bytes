import { Router } from 'express'
const router = Router()
import { createEvent } from '../database/commands/admin'

router.get('/', (request, response) => {
  response.render('adminDashboard')
})

router.get('/new-workshop', (request, response) => {
  response.render('admin/newWorkshop')
})

router.post('/new-workshop', (request, response) => {
  request.body
})


export default router
