import { iLoginInput } from '@interfaces/auth.interface'
import { iCheckTokenData, iLoginData } from '@interfaces/api.interface'

import { SERVER_LINKS } from '@utils/default'
import { LOGIN_QUERY, CHECK_QUERY } from './queries/auth.queries'
import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client'

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
	uri: SERVER_LINKS.public,
	cache: new InMemoryCache()
})

export class AuthAPI {
	static logIn = async ({
		email,
		password
	}: iLoginInput) => {
		
		const { data: { login: { token } } } = await client.query<
			iLoginData,
			{ input: iLoginInput }
		>({
			query: LOGIN_QUERY,
			variables: { input: { email, password } }
		})
		return token
	}

	static checkToken = async(token: string) => {
		const { data: { checkToken: { isValid } } } = await client.query<
			iCheckTokenData,
			{ token: string }
		>({
			query: CHECK_QUERY,
			variables: { token }
		})
		return isValid
	}
}