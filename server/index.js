const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./config')

app.use(cors())
// app.use(express.urlencoded({extended: true}))
// app.use(express.json())

app.get('/api/get', (req, res) => {
	const sqlQuery = "SELECT p.id as project_id, f.id as desc_id, f.title as desc_title, e.description as e_description, p.`in-progress`, p.title, p.description, p.image, p.website, p.github, e.link, e.children, e.id as e_id FROM projects as p RIGHT JOIN fulldesc as f ON p.id = f.project_id RIGHT JOIN fulldesc_elements as e ON f.id = e.fulldesc_id"
	
	db.query(sqlQuery, (err, result) => {
		res.send(result)
	})
})

app.listen(3042, () => {
	console.log("Let's start the party");
})
