import { sequelize } from '../connect.js'
import DataTypes from 'sequelize'


export const Users = sequelize.define('users', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	alias: { type: DataTypes.STRING, unique: true  },
	email: { type: DataTypes.STRING, unique: true },
	password: { type: DataTypes.STRING },
})

export const Projects = sequelize.define('projects', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	title: { type: DataTypes.STRING },
	summary: { type: DataTypes.STRING },
	description: { type: DataTypes.TEXT },
	image: { type: DataTypes.STRING },
	link: { type: DataTypes.STRING },
	github: { type: DataTypes.STRING },
	template: { type: DataTypes.STRING },
	inWorking: { type: DataTypes.BOOLEAN },
	isHidden: { type: DataTypes.BOOLEAN },
	showOrder: { type: DataTypes.STRING }
})

export const Info = sequelize.define('project_infos', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	projectId: { type: DataTypes.INTEGER },
	title: { type: DataTypes.STRING },
}, {
	timestamps: false
})

export const Description = sequelize.define('info_descriptions', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	projectInfoId: { type: DataTypes.INTEGER },
	title: { type: DataTypes.STRING },
	link: { type: DataTypes.STRING },
}, {
	timestamps: false
})

export const DescriptionItem = sequelize.define('description_items', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	infoDescriptionId: { type: DataTypes.INTEGER },
	text: { type: DataTypes.TEXT },
}, {
	timestamps: false
})

export const ProjectTechnology = sequelize.define('project_technologies', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
}, {
	timestamps: false
})

export const ProjectAuthor = sequelize.define('project_authors', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
}, {
	timestamps: false
})

export const Technologies = sequelize.define('technologies', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	title: { type: DataTypes.STRING },
	isHidden: { type: DataTypes.BOOLEAN }
}, {
	timestamps: false
})

export const TechnologyTypes = sequelize.define('technology_types', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	title: { type: DataTypes.STRING }
}, {
	timestamps: false
})

export const Roles = sequelize.define('roles', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	title: { type: DataTypes.STRING }
}, {
	timestamps: false
})


// Associations
Projects.hasMany(Info, {
	as: 'infos',
	onDelete: 'CASCADE',
	hooks: true
})
Info.belongsTo(Projects)

Info.hasMany(Description, {
	as: 'descriptions',
	onDelete: 'CASCADE',
	hooks: true
})
Description.belongsTo(Info)

Description.hasMany(DescriptionItem, {
	as: 'children',
	onDelete: 'CASCADE',
	hooks: true
})
DescriptionItem.belongsTo(Description)

Projects.hasMany(ProjectTechnology, { onDelete: 'CASCADE', hooks: true })
ProjectTechnology.belongsTo(Projects)
Technologies.hasMany(ProjectTechnology, { onDelete: 'CASCADE', hooks: true })
ProjectTechnology.belongsTo(Technologies)

TechnologyTypes.hasMany(Technologies, { onDelete: 'CASCADE', hooks: true })
Technologies.belongsTo(TechnologyTypes)

Users.hasMany(ProjectAuthor, { onDelete: 'CASCADE', hooks: true })
ProjectAuthor.belongsTo(Users)
Projects.hasMany(ProjectAuthor, { onDelete: 'CASCADE', hooks: true })
ProjectAuthor.belongsTo(Projects)

Roles.hasMany(Users, { onDelete: 'CASCADE', hooks: true })
Users.belongsTo(Roles)