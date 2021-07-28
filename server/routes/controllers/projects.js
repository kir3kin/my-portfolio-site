import { db } from '../../db/config.js'
import { sqlQuery } from '../../db/sqlQuery.js'

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

export const getAll = (req, res) => {
	const mySQLquery = new sqlQuery(fields, 'projects AS p')
	mySQLquery.addJoin('right', 'fulldesc AS f', 'p.id = f.project_id')
	mySQLquery.addJoin('right', 'fulldesc_elements AS e', 'f.id = e.fulldesc_id')
	
	db.query(mySQLquery.toString(), (err, result) => {
		res.status(200).json(result)
		if (err) res.json(err)
	})
}