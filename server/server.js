import express from 'express'
import cors from 'cors'
import http from 'http'
import https from 'https'
import { credentials } from './keys/credentials.js'

import projectsRouter from './routes/projectsRouter.js'

const PORTS = {
	'HTTP': 3040,
	'HTTPS': 3043
}
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routers
app.use(projectsRouter)// MyProjects

const httpServer = http.createServer(app)
const httpsServer = https.createServer(credentials, app)

httpServer.listen(PORTS['HTTP'], () => {})
httpsServer.listen(PORTS['HTTPS'], () => {})