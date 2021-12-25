import axios from 'axios'
import { SERVER_LINKS } from '@utils/default'
import {
	PROJECTS_QUERY,
	PROJECT_QUERY,
	TECHNOLOGIES_QUERY,
	TECHTYPES_QUERY
} from './queries/projects.queris'

import {
	AxiosParamsType,
	iCreateDescData,
	iCreateInfoData,
	iProjectQuery,
	iProjectsQuery,
	iTechnologyQuery,
	iTechTypesQuery
} from '@interfaces/api.interface'

import { setContext } from '@apollo/client/link/context'
import { ApolloClient, createHttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client'


import lsAPI from '@services/localStorage.api'
import { StorageType } from '@interfaces/services.interface'
import { iDescInput, iInfoInput } from '@interfaces/project.interface'

import {
	CREATE_DESC_MUTATION, CREATE_INFO_MUTATION
} from './mutations/projects.mutations'

const axiosParams: AxiosParamsType = {
	url: SERVER_LINKS.public,
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	},
}


const httpLink = createHttpLink({
  uri: SERVER_LINKS.private
})

const authLink = setContext((_, { headers }) => {
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

const privateClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache()
})




export class ProjectsAPI {
	static fetchProjects = async () => {
		const { data: { data: { projects } } }: iProjectsQuery = await axios({
			...axiosParams,
			data: { query: PROJECTS_QUERY }
		})
		return projects
	}

	static fetchProject = async (id: string) => {
		const { data: { data: { project } } }: iProjectQuery = await axios({
			...axiosParams,
			data: {
				query: PROJECT_QUERY,
				variables: { id }
			}
		})
		return project
	}



	static updateProjectData = async (id: string, data: any) => {
		


	}


	static createDesc = async (id: string, input: iDescInput) => {
		const { data } = await privateClient.mutate<
			iCreateDescData,
			{ id: string, input: iDescInput }
		>({
			mutation: CREATE_DESC_MUTATION,
			variables: { id, input },
		})
		return data ? data.createDescription.id : ''
	}

	static createInfo = async (id: string, input: iInfoInput) => {
		const { data } = await privateClient.mutate<
			iCreateInfoData,
			{ id: string, input: iInfoInput }
		>({
			mutation: CREATE_INFO_MUTATION,
			variables: { id, input },
		})
		return data ? data.createInfo.id : ''
	}









	static fetchTechnologies = async () => {
		const { data: { data: { technologies } } }: iTechnologyQuery = await axios({
			...axiosParams,
			data: { query: TECHNOLOGIES_QUERY }
		})
		return technologies
	}

	static fetchTechTypes = async () => {
		const { data: { data: { techs } } }: iTechTypesQuery = await axios({
			...axiosParams,
			data: { query: TECHTYPES_QUERY }
		})
		return techs
	}

}