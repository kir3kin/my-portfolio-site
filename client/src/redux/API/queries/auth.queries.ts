import { gql } from "@apollo/client";

export const LOGIN_QUERY = gql`query($input: LoginInput!) {
	login(input: $input) {
		token
	}
}`

export const CHECK_QUERY = gql`query($token: String!) {
	checkToken(token: $token) {
		isValid
	}
}`