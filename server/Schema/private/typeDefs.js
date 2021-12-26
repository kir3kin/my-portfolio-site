import { gql } from "apollo-server-core"

export const typeDefs = gql`
	scalar Date

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
		isHiden: Boolean!
		createdAt: Date!
		updatedAt: Date!
		infos: [Info!]
		technologies: [Technology!]
		author: User!
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
		isHiden: Boolean!
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
		isHiden: Boolean
		infos: [InfoInput!]
		technologies: [ID!]
	}

	# projectId: ID!
	input InfoInput {
		title: String!
		descriptions: [DescriptionInput!]
	}

	# projectInfoId: ID!
	input DescriptionInput {
		title: String!
		link: String
		children: [DescChildInput!]
	}

	# descriptionId: ID!
	input DescChildInput {
		text: String!
	}


	# ====== Projects Technologies ======
	# technologyTypeId: ID!
	input TechnologyInput {
		title: String!
		isHiden: Boolean!
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

	# todo: extend type Mutation

	"""
	====== Main Mutations ======
	"""
	type Mutation {
		check(input: RoleInput!): Role

		createProject(input: ProjectInput!): Project
		updateProject(id: ID!, input: ProjectInput!): Project
		deleteProject(id: ID!) : Project

		
		createInfo(projectId: ID!, input: InfoInput!): Info
		updateInfo(id: ID!, input: InfoInput!): Info
		deleteInfo(id: ID!): Info


		
		createDescription(projectInfoId: ID!, input: DescriptionInput!): Description
		updateDescription(id: ID!, input: DescriptionInput!): Description
		deleteDescription(id: ID!) : Description




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