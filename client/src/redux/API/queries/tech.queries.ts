import { gql } from "@apollo/client"


export const TECHNOLOGIES_QUERY = gql`query {
	technologies {
		id
		title
		isHidden
		techType {
			id
			title
		}
	}
}`

export const TECHTYPES_QUERY = gql`query {
	techTypes {
		id
		title
	}
}`