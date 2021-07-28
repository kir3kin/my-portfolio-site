import http from 'http'
import https from 'https'
import projectsRouter from './routes/projects.js'
import { credentials } from './keys/credentials.js'

const PORTS = {
	'HTTP': 3042,
	'HTTPS': 3044
}

import express from 'express'
import cors from 'cors'
const app = express()

app.use(cors())
app.use(projectsRouter)

const httpServer = http.createServer(app)
const httpsServer = https.createServer(credentials, app)

httpServer.listen(PORTS['HTTP'], () => {})
httpsServer.listen(PORTS['HTTPS'], () => {})