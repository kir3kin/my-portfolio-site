const fs = require('fs')
const http = require('http')
const https = require('https')
const privateKey  = fs.readFileSync('./keys/selfsigned.key', 'utf8')
const certificate = fs.readFileSync('./keys/selfsigned.crt', 'utf8')
const credentials = {key: privateKey, cert: certificate}

const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./config')
const sqlQuery = require('./slqQuery')

app.use(cors())
app.get('/api/get', (req, res) => {
	const fields = [
		'p.id AS project_id',
		'f.id AS desc_id',
		'f.title AS desc_title',
		'e.description AS e_description',
		'p.`in-progress`',
		'p.title',
		'p.description',
		'p.image',
		'p.website',
		'p.github',
		'e.link',
		'e.children',
		'e.id AS e_id'
	]
	const query = new sqlQuery(fields, 'projects AS p')
	query.addJoin('right', 'fulldesc AS f', 'p.id = f.project_id')
	query.addJoin('right', 'fulldesc_elements AS e', 'f.id = e.fulldesc_id')
	
	db.query(query.toString(), (err, result) => {
		res.send(result)
		if (err) console.log(err)
	})
})

const httpServer = http.createServer(app)
const httpsServer = https.createServer(credentials, app)

httpServer.listen(3046, () => {})
httpsServer.listen(3044, () => {})