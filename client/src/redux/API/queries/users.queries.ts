export const USERS_QUERY: string = `query {
	users{
		id
		alias
		email
		createdAt
		updatedAt
		role {
			id
			title
		}
	}
}`