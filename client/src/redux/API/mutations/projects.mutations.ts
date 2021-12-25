import { gql } from "@apollo/client";

export const CREATE_INFO_MUTATION = gql`mutation CreateInfo($id: ID!, $input: InfoInput!) {
	createInfo(projectId: $id, input: $input) {
		id
	}
}`

export const CREATE_DESC_MUTATION = gql`mutation CreateDesc($id: ID!, $input: DescriptionInput!) {
	createDescription(projectInfoId: $id, input: $input) {
		id
	}
}`