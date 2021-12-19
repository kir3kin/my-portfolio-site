export const PROJECTS_QUERY: string = `query {
	projects{
		id
		title
		summary
		image
		inWorking
		isHiden
		technologies {
			id
			title
			techType {
				id
				title
			}
		}
	}
}`

export const createContactQuery = `mutation CreateContact($input: ContactInput) {
	createContact(input: $input) {
		_id
		name
		email
	}
}`


export const PROJECT_QUERY: string = `query Project($id: ID!) {
	project(id: $id){
		id
		title
		summary
		description
		image
		link
		github
		template
		inWorking
		isHiden
		createdAt
		updatedAt
		infos {
			id
			title
			descriptions {
				id
				title
				link
				children {
					id
					text
				}
			}
		}
		technologies {
			id
			title
			isHiden
			techType {
				id
				title
			}
		}
		authors {
			id
			roleId
			alias
			email
			createdAt
			updatedAt
			role {
				id
				title
			}
		}
	}
}`


export const TECHNOLOGIES_QUERY: string =`query {
	technologies {
		id
		title
		isHiden
		techType {
			id
			title
		}
	}
}`

export const TECHTYPES_QUERY: string =`query {
	techTypes {
		id
		title
	}
}`