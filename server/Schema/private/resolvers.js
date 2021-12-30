import { GraphQLTimestamp } from 'graphql-scalars'

import { GraphQLUpload } from 'graphql-upload'

import { Kir3kinController } from '../../controllers/kir3kin.private.controller.js'

// import fs from 'fs'
// import { finished } from 'stream/promises'


export const resolvers = {
	Date: GraphQLTimestamp,
	Upload: GraphQLUpload,
	Query: {
		projects: async () => await Kir3kinController.getProjects(),
		project: async (_, { id }) => await Kir3kinController.getProject(id),
		technologies: async () => await Kir3kinController.getTechnologies(),
		techTypes: async () => await Kir3kinController.getTechTypes(),
		// createProject: async
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
	},
	Mutation: {
		createProject: async (_, { title }, { user }) => await Kir3kinController.createProject(title, user),
		removeProject: async (_, { id }) => await Kir3kinController.removeProject(id),

		updateShortData: async (_, { id, input }) => await Kir3kinController.updateProjectShortData(id, input),


		// not used yet
		// createProject: async (_, { input }, { user }) => await Kir3kinController.createProject(input, user),

		createTechType: async (_, { input }) => await Kir3kinController.createTechnologyType(input),
		updateTechType: async (_, { id, input }) => await Kir3kinController.updateTechnologyType(id, input),
		deleteTechType: async (_, { id }) => await Kir3kinController.deleteTechnologyType(id),
		// not used yet
		
		
		updateProjectTechs: async(_, { projectId, techIds}) => await Kir3kinController.updateProjectTechs(projectId, techIds),

		createInfo: async (_, { projectId: id, input }) => await Kir3kinController.createProjectInfo(id, input),
		updateInfo: async (_, { id, input }) => await Kir3kinController.updateProjectInfo(id, input),
		deleteInfo: async (_, { id }) => await Kir3kinController.deleteProjectInfo(id),

		createDescription: async (_, { projectInfoId: id, input }) => await Kir3kinController.createInfoDescription(id, input),
		updateDescription: async (_, { id, input }) => await Kir3kinController.updateInfoDescription(id, input),
		deleteDescription: async (_, { id }) => await Kir3kinController.deleteInfoDescription(id),
	}
}