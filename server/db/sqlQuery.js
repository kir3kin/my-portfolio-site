export class sqlQuery {
	_fields
	_table
	_join = ''
	_joinType = {
		'right': 'RIGHT',
		'left': 'LEFT',
		'inner': 'INNER',
		DEFAULT: 'INNER'
	}

	constructor(fields, table) {
		this._fields = this.addFields(fields)
		this._table = table
	}

	addJoin = (type, table, condition) => {
		this._join += `${this._joinType[type]} JOIN ${table} ON ${condition} `
	}

	addFields = fields => {
		let tempFields = ''
		if (Array.isArray(fields)) 	tempFields = fields.join(', ')
		else tempFields = fields
		return tempFields
	}

	toString = () => {
		return `SELECT ${this._fields} FROM ${this._table} ${this._join}`
	}
}