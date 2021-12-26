import { gql } from "@apollo/client";

// ====== Project's Info ====== \\
export const CREATE_INFO_MUTATION = gql`mutation CreateInfo($id: ID!, $input: InfoInput!) {
	createInfo(projectId: $id, input: $input) {
		id
		title
	}
}`

export const UPDATE_INFO_MUTATION = gql`mutation UpdateInfo($id: ID!, $input: InfoInput!) {
	updateInfo(id: $id, input: $input) {
		id
		title
		descriptions {
			id
			title
			link
		}
	}
}`

export const DELETE_INFO_MUTATION = gql`mutation DeleteInfo($id: ID!) {
	deleteInfo(id: $id) {
		id
	}
}`

// ====== Info's Description ====== \\
export const CREATE_DESC_MUTATION = gql`mutation CreateDesc($id: ID!, $input: DescriptionInput!) {
	createDescription(projectInfoId: $id, input: $input) {
		id
		projectInfoId
		title
		link
	}
}`

export const UPDATE_DESC_MUTATION = gql`mutation UpdateDesc($id: ID!, $input: DescriptionInput!) {
	updateDescription(id: $id, input: $input) {
		id
		projectInfoId
		title
		link
	}
}`

export const DELETE_DESC_MUTATION = gql`mutation DeleteDesc($id: ID!) {
	deleteDescription(id: $id) {
		id
		projectInfoId
	}
}`