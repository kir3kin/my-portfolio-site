import { ApolloAPI } from './apollo.API'

import { LOGIN_QUERY, CHECK_QUERY } from './queries/auth.queries'

import { iLoginInput } from '@interfaces/auth.interface'
import { iCheckTokenData, iLoginData } from '@interfaces/api.interface'

export class AuthAPI extends ApolloAPI {
	static logIn = async ({
		email,
		password
	}: iLoginInput) => {
		const { data: { login: { token } } } = await this.publicClient.query<
			iLoginData,
			{ input: iLoginInput }
		>({
			query: LOGIN_QUERY,
			variables: { input: { email, password } }
		})
		return token
	}

	static checkToken = async(token: string) => {
		const { data: { checkToken: { isValid } } } = await this.publicClient.query<
			iCheckTokenData,
			{ token: string }
		>({
			query: CHECK_QUERY,
			variables: { token }
		})
		return isValid
	}
}