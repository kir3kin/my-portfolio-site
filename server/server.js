import express from 'express'
import cors from 'cors'
import http from 'http'
import config from 'config'

// import errorHandler from './middleware/error.middleware.js'
import mainRouter from './routes/kir3kin.router.js'

const PORT = config.get('HTTP_PORT') || 5080

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(mainRouter)

// REST API Errors
// app.use(errorHandler)

const httpServer = http.createServer(app)
httpServer.listen(PORT, () => {
	console.log(`HTTP server has been started on ${PORT}`)
})