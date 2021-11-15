export const PROJECTS_QUERY: string = `query {
	projects{
		id
		title
		summary
		image
		inWorking
		isHide
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
		image
		link
		github
		template
		inWorking
		isHide
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
		techType {
			id
			title
		}
	}
}`