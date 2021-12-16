import publicSchema from '../Schema/public/schema.js'
import privateSchema from '../Schema/private/schema.js'

import express from 'express'
import path from 'path'

import { applyMiddleware } from 'graphql-middleware'
import checkroleMiddleware from '../middleware/checkrole.middleware.js'

import { LaunchApolloServer } from '../utils/LaunchApolloServer.js'


const router = new express.Router()

const schemaWithMiddleware = applyMiddleware(privateSchema, checkroleMiddleware)
LaunchApolloServer(publicSchema, router, '/api/kir3kin/public')
LaunchApolloServer(schemaWithMiddleware, router, '/api/kir3kin/private')


// Deploy react app
if (process.env.NODE_ENV === 'production') {
	const buildPath = path.join(path.resolve(), '..', 'client', 'build')
	router.use(express.static(buildPath))
	router.get('/*', (req, res) => {
		res.sendFile(path.join(buildPath, 'index.html'))
	})
}

export default router