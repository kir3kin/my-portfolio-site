import { GraphQLTimestamp } from 'graphql-scalars'
import { Kir3kinController } from '../../controllers/kir3kin.public.controller.js'

export const resolvers = {
	Date: GraphQLTimestamp,
	Query: {
		projects: async () => await Kir3kinController.getProjects(),
		project: async (_, { id }) => await Kir3kinController.getProject(id),
		technologies: async () => await Kir3kinController.getTechnologies(),
		techTypes: async () => await Kir3kinController.getTechTypes(),
		users: async() => await Kir3kinController.getUsers(),
		techTypes: async() => await Kir3kinController.getTechTypes(),
		login: async(_, { input }) => {
			const { email, password } = input
			return await Kir3kinController.login(email, password)
		},
		checkToken: async(_, { token }) => await Kir3kinController.checkToken(token)
	},
	Project: {
		infos: async (project) => {
			return await Kir3kinController.getInfos(project.id)
		},
		technologies: async (project) => await Kir3kinController.getProjectTechnologies(project.id),
		author: async (project) => await Kir3kinController.getProjectAuthor(project.id)
	},
	Info: {
		descriptions: async (info) => await Kir3kinController.getDescriptions(info.id)
	},
	Description: {
		children: async (description) => await Kir3kinController.getDescriptionItems(description.id)
	},
	Technology: {
		techType: async (technology) => await Kir3kinController.getType(technology.technologyTypeId)
	},
	User: {
		role: async(user) => await Kir3kinController.getRole(user.roleId)
	}
}