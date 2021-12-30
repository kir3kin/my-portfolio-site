import { ApolloAPI } from './apollo.API'


import {
	PROJECTS_MAIN_DATA_QUERY,
	PROJECTS_QUERY,
	PROJECT_QUERY
} from './queries/projects.queris'

import {
	CREATE_DESC_MUTATION,
	CREATE_INFO_MUTATION,
	CREATE_PROJECT_MUTATION,
	DELETE_DESC_MUTATION,
	DELETE_INFO_MUTATION,
	REMOVE_PROJECT_MUTATION,
	UPDATE_DESC_MUTATION,
	UPDATE_INFO_MUTATION,
	UPDATE_SHORT_DATA_MUTATION,
	UPDATE_TECHS_MUTATION,
} from './mutations/projects.mutations'

import {
	iCreateDescData,
	iCreateInfoData,
	iCreateProjectData,
	iDeleteDescData,
	iDeleteInfoData,
	iProjectData,
	iProjectsData,
	iProjectsMainData,
	iRemoveProjectData,
	iUpdateDescData,
	iUpdatedProjectShortData,
	iUpdateInfoData,
	iUpdateTechsData,
} from '@interfaces/api.interface'

import {
	iDescInput,
	iInfoInput,
	iShortDataInput
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

	static fetchProjectsMainData = async () => {
		const { data: { projects } } = await this.publicClient.query<
			iProjectsMainData
		>({
			query: PROJECTS_MAIN_DATA_QUERY
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

	static createProject = async (title: string) => {
		const { data } = await this.privateClient.mutate<
			iCreateProjectData
		>({
			mutation: CREATE_PROJECT_MUTATION,
			variables: { title }
		})
		return data ? data.createProject : null
	}

	static removeProject = async (id: string) => {
		const { data } = await this.privateClient.mutate<
			iRemoveProjectData
		>({
			mutation: REMOVE_PROJECT_MUTATION,
			variables: { id }
		})

		return data ? data.removeProject : null
	}


	// ====== Project's ShortData ====== \\
	static updateProjectShortData = async (
		id: string,
		input: iShortDataInput
	) => {

		const { data } = await this.privateFormDataClient.mutate<
			iUpdatedProjectShortData
		>({
			mutation: UPDATE_SHORT_DATA_MUTATION,
			variables: { id, input }
		})

		return data ? data.updateShortData : null
	}

	// ====== Project's Techs ====== \\
	static updateProjectTechs = async (projectId: string, techIds: number[]) => {
		const { data } = await this.privateClient.mutate<
			iUpdateTechsData
		>({
			mutation: UPDATE_TECHS_MUTATION,
			variables: { projectId, techIds }
		})
	
		return data ? data.updateProjectTechs : undefined
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