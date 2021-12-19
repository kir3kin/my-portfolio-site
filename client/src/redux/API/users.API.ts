import { AxiosParamsType, iUsersQuery } from "@interfaces/api.interface"
import { SERVER_LINKS } from "@utils/default"
import axios from "axios"
import { USERS_QUERY } from "./queries/users.queries"



const axiosParams: AxiosParamsType = {
	url: SERVER_LINKS.public,
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	},
}

export class UsersAPI {

	static fetchUsers = async () => {

		const { data: { data: { users } } }: iUsersQuery = await axios({
			...axiosParams,
			data: { query: USERS_QUERY }
		})
		return users
	}
}