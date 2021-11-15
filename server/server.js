import express from 'express'
import cors from 'cors'
import http from 'http'
// import https from 'https'
// import { credentials } from './keys/credentials.js'
import path from 'path'
import config from 'config'

// #1
// import { kir3kinApolloServer, kir3kinPath } from './routes/kir3kin.router.js'
// #2
import { kir3kinRouter } from './routes/kir3kin.router.js'

const PORTS = {
	'HTTP': config.get('HTTP_PORT') || 5080,
	'HTTPS': config.get('HTTPS_PORT') || 5443,
}

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
// #1
// await kir3kinApolloServer.start()
// kir3kinApolloServer.applyMiddleware({
// 	app, path: kir3kinPath
// })
// #2
app.use('/api/kir3kin', kir3kinRouter)


if (process.env.NODE_ENV === 'production') {
	// const tempPath = path.join(path.resolve(), '../', 'client', 'build', 'index.html')
	const tempPath = path.join(path.resolve(), '..', 'client', 'build', 'index.html')

	console.log('tempPath:', tempPath)
	app.use('/', express.static(tempPath))

	app.get('/*', (req, res) => {
		res.sendFile(path.resolve(tempPath))
	})

}

const httpServer = http.createServer(app)
// const httpsServer = https.createServer(credentials, app)

httpServer.listen(PORTS['HTTP'], () => {
	console.log(`HTTP server has been started on ${PORTS.HTTP}`)
})
// httpsServer.listen(PORTS['HTTPS'], () => {})