import { Router } from 'express'
import { getAll } from './controllers/projectsController.js'

const router = Router()
router.get('/api/projects', getAll)
export default router