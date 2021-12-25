import { gql } from "@apollo/client"


export const TECHNOLOGIES_QUERY = gql`query {
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

export const TECHTYPES_QUERY = gql`query {
	techTypes {
		id
		title
	}
}`