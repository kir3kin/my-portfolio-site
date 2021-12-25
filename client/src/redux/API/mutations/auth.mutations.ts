import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`mutation CreateContact($input: ContactInput) {
	createContact(input: $input) {
		_id
		name
		email
	}
}`
