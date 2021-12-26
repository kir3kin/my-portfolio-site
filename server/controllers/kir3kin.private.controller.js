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
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import config from 'config'
import { ERROR_MESSAGES } from '../utils/const.js'


const generateJwt = (id, email, role) => {
	return jwt.sign(
		{ id, email, role },
		config.get('jwtSecret'),
		{ expiresIn: config.get('jwtTokenLife') }
	)
}

export class Kir3kinController {
	
	// Query:
	static getProjects = async () => {
		// ApiError
		try {
			const projects = await Projects.findAll()
			return projects
		} catch (e) {
			console.log('e.message:', e.message)
		}
	}

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
	static getDescriptions = async (projectInfoId) => await Description.findOne({ where: { projectInfoId } })
	
	// Description:
	static getDescriptionItems = async (infoDescriptionId) => await DescriptionItem.findAll({ where: { infoDescriptionId } })
	
	// Technology:
	static getType = async (id) => await TechnologyTypes.findOne({ where: { id } })
	
	// User:
	static getRole = async (id) => await Roles.findOne({ where: { id } })




	// Project:
	static createProject = async (input, user) => {
		const { title, summary, description, image, link, github, template, inWorking, isHiden, infos, technologies } = input
		
		const project = await Projects.create({
			title, summary, description, image, link, github, template, inWorking, isHiden
		})
		if (!project) throw new Error(ERROR_MESSAGES.project_create)

		createProjectAuthor(project.id, user.id)
		if (infos) createProjectInfo(infos, project.id)
		if (technologies) createProjectTechs(technologies, project.id)

		return project
	}

	
	static createTechnologyType = async (input) => {
		const { title } = input

		const techType = await TechnologyTypes.create({ title })
		if (!techType) throw new Error(ERROR_MESSAGES.techType_create)

		return techType
	}

	static updateTechnologyType = async (id, input) => {
		const { title } = input
		const techType = await TechnologyTypes.findOne({ where: { id } })
		if (!techType) throw new Error(ERROR_MESSAGES.techType_update)
		await techType.update({ title })

		return techType
	}

	static deleteTechnologyType = async (id) => {
		const techType = await TechnologyTypes.findOne({ where: { id } })
		if (!techType) throw new Error(ERROR_MESSAGES.techType_delete)
		await techType.destroy()
		return techType
	}



	// test
	static check = async (input, user) => {
		const { title } = input
				console.log('input:', input)
		console.log('user:', user)
		const role = Role.create({ title })
		return role
	}


	// ============ Mutations ============ \\

	// ====== Project's Info
	static createProjectInfo = async (id, input) => {
		const { title } = input
		const newInfo = await Info.create({
			projectId: id,
			title,
		})
		return newInfo
	}

	static updateProjectInfo = async (id, input) => {
		const { title } = input
		const info = await Info.findOne({ where: { id } })
		return await info.update({ title })
	}

	static deleteProjectInfo = async (id) => {
		const info = await Info.findOne({ where: { id } })
		return await info.destroy()
	}

	// ====== Project's Description
	static createInfoDescription = async (id, input) => {
		const { title, link } = input
		const newDesc = await Description.create({
			projectInfoId: id,
			title,
			link
		})
		return newDesc
	}

	static updateInfoDescription = async (id, input) => {
		const { title, link } = input
		const desc = await Description.findOne({ where: { id } })
		return await desc.update({ title, link })
	}

	static deleteInfoDescription = async (id) => {
		const desc = await Description.findOne({ where: { id } })
		return await desc.destroy()
	}
}













// [START:] Project data \\
const createProjectAuthor = (projectId, userId) => {
	ProjectAuthor.create({ projectId, userId })
}

const createProjectTechs = (technologies, projectId) => {
	technologies.map(technologyId => {
		ProjectTechnology.create({ projectId, technologyId })
	})
}
// [END:] Project data \\


// [START:] Project's Info \\
const createProjectInfo = (infos, parentId) => {
	infos.map(async info => {
		const temp = await Info.create({
			projectId: parentId,
			title: info.title
		})

		if (info.descriptions) createProjectDescription(info.descriptions, temp.id)
	})
}

const createProjectDescription = (descriptions, parentId) => {
	descriptions.map(async desc => {
		const temp = await Description.create({
			projectInfoId: parentId,
			title: desc.title,
			link: desc.link
		})

		if (desc.children) createProjectChildren(desc.children, temp.id)
	})
}

const createProjectChildren = (children, parentId) => {
	children.map(child => {
		DescriptionItem.create({
			descriptionId: parentId,
			title: child.title
		})
	})
}
// [END:] Project's Info \\

