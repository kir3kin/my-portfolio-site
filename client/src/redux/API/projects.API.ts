import { ApolloAPI } from './apollo.API'

import {
	PROJECTS_QUERY,
	PROJECT_QUERY
} from './queries/projects.queris'

import {
	CREATE_DESC_MUTATION,
	CREATE_INFO_MUTATION
} from './mutations/projects.mutations'

import {
	iCreateDescData,
	iCreateInfoData,
	iProjectData,
	iProjectsData,
} from '@interfaces/api.interface'

import {
	iDescInput,
	iInfoInput
} from '@interfaces/project.interface'


export class ProjectsAPI extends ApolloAPI {
	static fetchProjects = async () => {
		const { data: { projects } } = await this.publicClient.query<
			iProjectsData
		>({
			query: PROJECTS_QUERY
		})
		return projects
	}

	static fetchProject = async (id: string) => {
		const { data: { project } } = await this.publicClient.query<
			iProjectData
		>({
			query: PROJECT_QUERY,
			variables: { id }
		})
		return project
	}

	// TODO
	static updateProjectData = async (id: string, data: any) => {
	}

	static createDesc = async (id: string, input: iDescInput) => {
		const { data } = await this.privateClient.mutate<
			iCreateDescData,
			{ id: string, input: iDescInput }
		>({
			mutation: CREATE_DESC_MUTATION,
			variables: { id, input },
		})
		return data ? data.createDescription.id : ''
	}

	static createInfo = async (id: string, input: iInfoInput) => {
		const { data } = await this.privateClient.mutate<
			iCreateInfoData,
			{ id: string, input: iInfoInput }
		>({
			mutation: CREATE_INFO_MUTATION,
			variables: { id, input },
		})
		return data ? data.createInfo.id : ''
	}
}