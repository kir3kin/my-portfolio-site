import { gql } from "apollo-server-core"

export const typeDefs = gql`
	scalar Date
	scalar Upload

	"""
	====== Projects Table
	"""
	type Project {
		id: ID!
		title: String!
		summary: String!
		description: String
		image: String
		link: String!
		github: String!
		template: String
		inWorking: Boolean!
		isHidden: Boolean!
		createdAt: Date!
		updatedAt: Date!
		infos: [Info!]
		technologies: [Technology!]
		author: User!
		showOrder: String!
	}

	type Info {
		id: ID!
		title: String!
		descriptions: [Description!]
	}
	
	type Description {
		id: ID!
		title: String!
		link: String!
		projectInfoId: ID!
		children: [DescChild!]
	}

	type DescChild {
		id: ID!
		descriptionId: ID!
		text: String!
	}

	"""
	====== Projects Technologies Table
	"""
	type Technology {
		id: ID!
		title: String!
		isHidden: Boolean!
		techType: TechType!
	}

	type TechType {
		id: ID!
		title: String!
	}

	"""
	====== Users Table
	"""
	type User {
		id: ID!
		roleId: ID!
		alias: String!
		email: String!
		password: String!
		createdAt: Date!
		updatedAt: Date!
		role: Role!
	}

	type Role {
		id: ID!
		title: String!
	}

	"""
	====== User Auth
	"""
	type Auth {
		token: String
	}

	"""
	====== Inputs ======
	"""
	
	#	====== Projects Table ======
	input ProjectInput {
		title: String! 
		summary: String!
		description: String
		image: String
		link: String!
		github: String!
		template: String
		inWorking: Boolean
		isHidden: Boolean!
		infos: [InfoInput!]
		technologies: [ID!]
	}

	input InfoInput {
		title: String!
		descriptions: [DescriptionInput!]
	}

	input DescriptionInput {
		title: String!
		link: String
		children: [DescChildInput!]
	}

	input DescChildInput {
		text: String!
	}

	input ShortDataInput {
		title: String!
		summary: String!
		github: String!
		link: String!
		showOrder: String!
		image: Upload
		description: String
		template: String
		isHidden: Boolean!
	}


	# ====== Projects Technologies ======
	input TechnologyInput {
		title: String!
		isHidden: Boolean!
	}

	input TechTypeInput {
		title: String!
	}

	# ====== User Auth ======
	input UserInput {
		roleId: ID!
		alias: String!
		email: String!
		password: String!
	}

	input RoleInput {
		title: String!
	}

	# todo: extend type Queries
	"""
	====== Main Queries ======
	"""
	type Query {
		projects: [Project!]!
		project(id: ID!): Project
		technologies: [Technology!]!
		techTypes: [TechType!]!
	}


	"""
	====== Main Mutations ======
	"""
	type Mutation {
		createProject(title: String!): Project
		removeProject(id: ID!): Project
		updateShortData(id: ID!, input: ShortDataInput!): Project

		updateProject(id: ID!, input: ProjectInput!): Project
		deleteProject(id: ID!) : Project
		
		createInfo(projectId: ID!, input: InfoInput!): Info
		updateInfo(id: ID!, input: InfoInput!): Info
		deleteInfo(id: ID!): Info
		
		createDescription(projectInfoId: ID!, input: DescriptionInput!): Description
		updateDescription(id: ID!, input: DescriptionInput!): Description
		deleteDescription(id: ID!) : Description

		updateProjectTechs(projectId: ID!, techIds: [ID!]!): [Technology!]




		createDescChild(descriptionId: ID!, input: DescChildInput!): DescChild
		updateDescChild(id: ID!, input: DescChildInput!): DescChild
		deleteDescChild(id: ID!) : DescChild


		createTechnology(technologyTypeId: ID!, input: TechnologyInput!): Technology
		updateTechnology(id: ID!, input: TechnologyInput!): Technology
		deleteTechnology(id: ID!): Technology
		

		createTechType(input: TechTypeInput!): TechType
		updateTechType(id: ID!, input: TechTypeInput!): TechType
		deleteTechType(id: ID!): TechType
	}
`