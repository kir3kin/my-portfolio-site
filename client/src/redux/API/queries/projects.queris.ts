import { gql } from "@apollo/client"

export const PROJECTS_QUERY = gql`
	query {
		projects {
			id
			title
			summary
			image
			inWorking
			isHidden
			showOrder
			technologies {
				id
				title
				techType {
					id
					title
				}
			}
		}
	}
`

export const PROJECTS_MAIN_DATA_QUERY = gql`
	query {
		projects {
			id
			title
			createdAt
			updatedAt
			isHidden
			showOrder
			author {
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
	}
`

export const PROJECT_QUERY = gql`
	query Project($id: ID!) {
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
			isHidden
			createdAt
			updatedAt
			showOrder
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
				isHidden
				techType {
					id
					title
				}
			}
			author {
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
	}
`