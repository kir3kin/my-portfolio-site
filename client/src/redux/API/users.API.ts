import { ApolloAPI } from './apollo.API'

import { iUsersData } from "@interfaces/api.interface"

import { USERS_QUERY } from "./queries/users.queries"

export class UsersAPI extends ApolloAPI {
	static fetchUsers = async () => {
		const { data: { users } } = await this.publicClient.query<
			iUsersData
		>({
			query: USERS_QUERY
		})
		return users
	}
}