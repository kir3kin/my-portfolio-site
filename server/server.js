import express from 'express'
import cors from 'cors'
import http from 'http'
import path from 'path'
import config from 'config'

import errorHandler from './middleware/error.middleware.js'
import { kir3kinRouter } from './routes/kir3kin.router.js'

const PORT = config.get('HTTP_PORT') || 5080

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/kir3kin', kir3kinRouter)

// start react app
if (process.env.NODE_ENV === 'production') {
	const buildPath = path.join(path.resolve(), '..', 'client', 'build')
	app.use(express.static(buildPath))
	app.get('/*', (req, res) => {
		res.sendFile(path.join(buildPath, 'index.html'))
	})
}

app.use(errorHandler)

const httpServer = http.createServer(app)
httpServer.listen(PORT, () => {
	console.log(`HTTP server has been started on ${PORT}`)
})