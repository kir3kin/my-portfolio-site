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
	iProjectQuery,
	iProjectsQuery,
	iTechnologyQuery,
	iTechTypesQuery
} from '@interfaces/api.interface';

const axiosParams: AxiosParamsType = {
	url: SERVER_LINKS.public,
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	},
}

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