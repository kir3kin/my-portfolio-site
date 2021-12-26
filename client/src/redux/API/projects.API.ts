import { ApolloAPI } from './apollo.API'

import {
	PROJECTS_QUERY,
	PROJECT_QUERY
} from './queries/projects.queris'

import {
	CREATE_DESC_MUTATION,
	CREATE_INFO_MUTATION,
	DELETE_DESC_MUTATION,
	DELETE_INFO_MUTATION,
	UPDATE_DESC_MUTATION,
	UPDATE_INFO_MUTATION
} from './mutations/projects.mutations'

import {
	iCreateDescData,
	iCreateInfoData,
	iDeleteDescData,
	iDeleteInfoData,
	iProjectData,
	iProjectsData,
	iUpdateDescData,
	iUpdateInfoData,
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
	

	// ====== Project's Info ====== \\
	static createInfo = async (id: string, input: iInfoInput) => {
		const { data } = await this.privateClient.mutate<
			iCreateInfoData,
			{ id: string, input: iInfoInput }
		>({
			mutation: CREATE_INFO_MUTATION,
			variables: { id, input }
		})
		return data ? data.createInfo : null
	}

	static updateInfo = async (id: string, input: iInfoInput) => {
		const { data } = await this.privateClient.mutate<
			iUpdateInfoData,
			{ id: string, input: iInfoInput }
		>({
			mutation: UPDATE_INFO_MUTATION,
			variables: { id, input }
		})
		return data ? data.updateInfo : null
	}

	static deleteInfo = async (id: string) => {
		const { data } = await this.privateClient.mutate<
			iDeleteInfoData,
			{ id: string }
		>({
			mutation: DELETE_INFO_MUTATION,
			variables: { id },
		})
		return data ? data.deleteInfo.id : ''
	}

	// ====== Info's Description ====== \\
	static createDesc = async (id: string, input: iDescInput) => {
		const { data } = await this.privateClient.mutate<
		iCreateDescData,
			{ id: string, input: iDescInput }
		>({
			mutation: CREATE_DESC_MUTATION,
			variables: { id, input },
		})
		return data ? data.createDescription : null
	}

	static updateDesc = async (id: string, input: iDescInput) => {
		const { data } = await this.privateClient.mutate<
			iUpdateDescData,
			{ id: string, input: iDescInput }
		>({
			mutation: UPDATE_DESC_MUTATION,
			variables: { id, input },
		})
		return data ? data.updateDescription : null
	}

	static deleteDesc = async (id: string) => {
		const { data } = await this.privateClient.mutate<
			iDeleteDescData,
			{ id: string }
		>({
			mutation: DELETE_DESC_MUTATION,
			variables: { id },
		})
		return data ? data.deleteDescription : null
	}
}