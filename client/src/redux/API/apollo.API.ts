import { setContext } from "@apollo/client/link/context"
import { ApolloClient, createHttpLink, InMemoryCache, NormalizedCacheObject } from "@apollo/client"

import { StorageType } from "@interfaces/services.interface"

import lsAPI from "@services/localStorage.api"

import { SERVER_LINKS } from "@utils/default"


export class ApolloAPI {
	static httpLink = createHttpLink({
		uri: SERVER_LINKS.private
	})

	static authLink = setContext((_, { headers }) => {
		const token = lsAPI.getStorageData({
			storage: StorageType.USER,
			field: 'token'
		})
	
		return {
			headers: {
				...headers,
				authorization: token ? `Bearer ${token}` : '',
			}
		}
	})

	static publicClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
		uri: SERVER_LINKS.public,
		cache: new InMemoryCache()
	})

	static privateClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
		link: this.authLink.concat(this.httpLink),
		cache: new InMemoryCache()
	})
}