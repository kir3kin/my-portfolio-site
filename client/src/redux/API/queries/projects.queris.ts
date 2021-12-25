import { gql } from "@apollo/client"

export const PROJECTS_QUERY = gql`query {
	projects {
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

export const PROJECT_QUERY = gql`query Project($id: ID!) {
	project(id: $id) {
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