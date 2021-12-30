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
	static login = async(email, password) => {
		const user = await Users.findOne({ where: { email }})
		if (!user) throw new Error(ERROR_MESSAGES.login)
		
		const valid = await bcrypt.compare(password, user.password)
		if (!valid) throw new Error(ERROR_MESSAGES.login)

		const role = await Roles.findOne({ where: { id: user.roleId } })
		if (!role) throw new Error(ERROR_MESSAGES.permission)

		return { token: generateJwt(user.id, user.email, role.title) }
	}

	static checkToken = async(token) => {
		let decoded
		const tokenInfo = {
			isValid: false
		}

		try {
			decoded = jwt.verify(token, config.get('jwtSecret'))
		} catch(e) {
			return tokenInfo
		}

		if (decoded.role === 'ADMIN') tokenInfo.isValid = true 
		return { ...tokenInfo }
	}

	static getUsers = async () => {
		const users = await Users.findAll()
		return users
	}

	static getProjects = async () => {
		const projects = await Projects.findAll()

		if (!projects) throw new Error(ERROR_MESSAGES.projects_getting)
		return projects
	}

	static getProject = async (id) => await Projects.findOne({ where: { id } })
	static getTechnologies = async () => await Technologies.findAll()
	static getTechTypes = async () => await TechnologyTypes.findAll()

	// Project:
	static getInfos = async (projectId) => await Info.findAll({ where: { projectId } })
	static getProjectTechnologies = async (projectId) => {
		const project = await Projects.findOne({ where: { id: projectId } })
		if (!project) throw new Error(ERROR_MESSAGES.project_create)

		const projectTechnologies = await ProjectTechnology.findAll({ where : { projectId } })
		
		const technologyIds = []
		projectTechnologies.map(item => technologyIds.push(item.technologyId))

		return await Technologies.findAll({ where: { id: technologyIds } })
	}

	static getProjectAuthor = async (projectId) => {
		const project = await Projects.findOne({ where: { id: projectId } })
		if (!project) throw new Error(ERROR_MESSAGES.project_create)
		const projectAuthor = await ProjectAuthor.findOne({ where : { projectId } })
		return await Users.findOne({ where: { id: projectAuthor.userId } })
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