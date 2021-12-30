import { gql } from "@apollo/client";

export const CREATE_PROJECT_MUTATION = gql`
	mutation CreateProject($title: String!) {
		createProject(title: $title) {
			id
			title
			summary
			github
			link
			showOrder
			image
			description
			template
			createdAt
			updatedAt
			isHidden
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

export const REMOVE_PROJECT_MUTATION = gql`
	mutation RemoveProject($id: ID!) {
		removeProject(id: $id) {
			id
		}
	}
`

// ====== Project's Short Data ====== \\
export const UPDATE_SHORT_DATA_MUTATION = gql`
	mutation UpdateShorData($id: ID!, $input: ShortDataInput!) {
		updateShortData(id: $id, input: $input) {
			title
			summary
			github
			link
			showOrder
			image
			description
			template
			isHidden
		}
	}
`

// ====== Project's Techs ====== \\
export const UPDATE_TECHS_MUTATION = gql`
	mutation UpdateTechs($projectId: ID!, $techIds: [ID!]!) {
		updateProjectTechs(projectId: $projectId, techIds: $techIds) {
			id
			title
		}
	}
`


// ====== Project's Info ====== \\
export const CREATE_INFO_MUTATION = gql`
	mutation CreateInfo($id: ID!, $input: InfoInput!) {
		createInfo(projectId: $id, input: $input) {
			id
			title
		}
	}
`

export const UPDATE_INFO_MUTATION = gql`
	mutation UpdateInfo($id: ID!, $input: InfoInput!) {
		updateInfo(id: $id, input: $input) {
			id
			title
			descriptions {
				id
				title
				link
			}
		}
	}
`

export const DELETE_INFO_MUTATION = gql`
	mutation DeleteInfo($id: ID!) {
		deleteInfo(id: $id) {
			id
		}
	}
`

// ====== Info's Description ====== \\
export const CREATE_DESC_MUTATION = gql`
	mutation CreateDesc($id: ID!, $input: DescriptionInput!) {
		createDescription(projectInfoId: $id, input: $input) {
			id
			projectInfoId
			title
			link
		}
	}
`

export const UPDATE_DESC_MUTATION = gql`
	mutation UpdateDesc($id: ID!, $input: DescriptionInput!) {
		updateDescription(id: $id, input: $input) {
			id
			projectInfoId
			title
			link
		}
	}
`

export const DELETE_DESC_MUTATION = gql`
	mutation DeleteDesc($id: ID!) {
		deleteDescription(id: $id) {
			id
			projectInfoId
		}
	}
`