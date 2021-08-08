import mysql from 'mysql'

export const db = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'my-projects'
})

// export const db = mysql.createPool({
// 	host: 'bv426938.mysql.tools',
// 	user: 'bv426938_db',
// 	database: 'bv426938_db',
// 	password: '4CRRwRlc'
// })