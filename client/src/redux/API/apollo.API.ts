import { setContext } from "@apollo/client/link/context"
import { ApolloClient, createHttpLink, DefaultOptions, InMemoryCache, NormalizedCacheObject } from "@apollo/client"
import { createUploadLink } from "apollo-upload-client"

import { StorageType } from "@interfaces/services.interface"

import lsAPI from "@services/localStorage.API"


export class ApolloAPI {
	static httpLink = createHttpLink({
		uri: process.env.API_PRIVATE
	})

	static uploadLink = createUploadLink({
		uri: process.env.API_PRIVATE
	})

	static defaultOptions: DefaultOptions = {
		query: {
			fetchPolicy: 'no-cache'
		}
	}

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
		uri: process.env.API_PUBLIC,
		cache: new InMemoryCache(),
		defaultOptions: this.defaultOptions
	})

	static privateClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
		link: this.authLink.concat(this.httpLink),
		cache: new InMemoryCache()
	})

	static privateFormDataClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
		link: this.authLink.concat(this.uploadLink),
		cache: new InMemoryCache()
	})
}