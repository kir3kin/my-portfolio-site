import { ApolloAPI } from './apollo.API'

import { iTechnologiesData, iTechTypesData } from "@interfaces/api.interface"

import { TECHNOLOGIES_QUERY, TECHTYPES_QUERY } from "./queries/tech.queries"

export class TechsAPI extends ApolloAPI {
	static fetchTechnologies = async () => {
		const { data: { technologies } } = await this.publicClient.query<
			iTechnologiesData
		>({
			query: TECHNOLOGIES_QUERY
		})
		return technologies
	}

	static fetchTechTypes = async () => {
		const { data: { techs } } = await this.publicClient.query<
			iTechTypesData
		>({
			query: TECHTYPES_QUERY
		})
		return techs
	}
}