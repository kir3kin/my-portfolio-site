export interface User {
	id: string
	roleId: string
	alias: string
	email: string
	// password: string
	createdAt: Date
	updatedAt: Date
	role: Role
}

interface Role {
	id: string
	title: string
}
