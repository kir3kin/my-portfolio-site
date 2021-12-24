import axios from "axios"

import { AxiosParamsType, iTechnologyQuery, iTechTypesQuery } from "@interfaces/api.interface"

import { TECHNOLOGIES_QUERY, TECHTYPES_QUERY } from "./queries/projects.queris"

import { SERVER_LINKS } from "@utils/default"

const axiosParams: AxiosParamsType = {
	url: SERVER_LINKS.public,
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	},
}


export class TechsAPI {

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