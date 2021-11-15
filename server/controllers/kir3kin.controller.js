import {
	Users,
	Projects,
	Info,
	Description,
	DescriptionItem,
	Technologies,
	TechnologyTypes,
	Roles,
	ProjectTechnology,
	ProjectAuthor
} from '../db/models/models.js'

export class Kir3kinController {
	// Query:
	static getProjects = async () => await Projects.findAll()
	static getProject = async (id) => await Projects.findOne({ where: { id } })
	static getTechnologies = async () => await Technologies.findAll()
	static getTechTypes = async () => await TechnologyTypes.findAll()

	// Project:
	static getInfos = async (projectId) => await Info.findAll({ where: { projectId } })
	static getProjectTechnologies = async (projectId) => {
		const project = await Projects.findOne({ where: { id: projectId } })
		// if (!project) error_handler()

		const projectTechnologies = await ProjectTechnology.findAll({ where : { projectId } })
		
		const technologyIds = []
		projectTechnologies.map(item => technologyIds.push(item.technologyId))

		return await Technologies.findAll({ where: { id: technologyIds } })
	}

	static getProjectAuthors = async (projectId) => {
		const project = await Projects.findOne({ where: { id: projectId } })
		// if (!project) error_handler()

		const projectAuthors = await ProjectAuthor.findAll({ where : { projectId } })
		
		const authorIds = []
		projectAuthors.map(item => authorIds.push(item.userId))

		return await Users.findAll({ where: { id: authorIds } })
	}

	// Info:
	static getDescriptions = async (projectInfoId) => await Description.findAll({ where: { projectInfoId } })
	
	// Description:
	static getDescriptionItems = async (infoDescriptionId) => await DescriptionItem.findAll({ where: { infoDescriptionId } })
	
	// Technology:
	static getType = async (id) => await TechnologyTypes.findOne({ where: { id } })
	
	// User:
	static getRole = async (id) => await Roles.findOne({ where: { id } })
}