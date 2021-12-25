import { gql } from "@apollo/client";

export const USERS_QUERY = gql`query {
	users {
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