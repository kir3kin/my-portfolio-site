import axios from 'axios'
import { SERVER_LINK } from '../../utils/default'
import {
	PROJECTS_QUERY,
	PROJECT_QUERY,
	TECHNOLOGIES_QUERY
} from './queries'
import {
	AxiosParamsType,
	iProjectQuery,
	iProjectsQuery,
	iTechnologyQuery
} from '../../interfaces/api.interface';

const axiosParams: AxiosParamsType = {
	url: SERVER_LINK,
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

	static fetchProject = async (id) => {
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

}