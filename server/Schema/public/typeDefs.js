import { gql } from "apollo-server-core"

export const typeDefs = gql`
	scalar Date

	"""
	Projects Table
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
		projectInfoId: ID!
		title: String!
		descriptions: [Description!]!
	}

	type Description {
		id: ID!
		infoDescriptionId: ID!
		title: String!
		link: String!
		children: [DescChild]!
	}

	type DescChild {
		id: ID!
		descriptionId: ID!
		text: String!
	}

	"""
	Projects Technologies Table
	"""
	type Technology {
		id: ID!
		technologyTypeId: ID!
		title: String!
		techType: techType!
		isHidden: Boolean!
	}

	type techType {
		id: ID!
		title: String!
	}

	"""
	Users Table
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
	User Auth
	"""
	type Auth {
		token: String!
	}

	type ValidToken {
		isValid: Boolean
	}

	input LoginInput {
		email: String!
		password: String!
	}


	"""
	Main Queries
	"""
	type Query {
		projects: [Project!]!
		project(id: ID!): Project
		technologies: [Technology!]!
		techTypes: [techType!]!

		users: [User!]!

		login(input: LoginInput!): Auth
		checkToken(token: String!): ValidToken!
	}
`

// === graphqli ===
// http://localhost:5080/api/kir3kin
// query {
	// project(id:"1") {
	// 	title
	// 	 authors {
	// 		 email
	// 		 role {
	// 			 title
	// 		 }
	// 	 }
	//  }
//   projects{
//     title
//     authors {
//       alias
//       email
//       role {
//         title
//       }
//     }
//     technologies {
//      title 
//     }
//     infos {
//       title
//       descriptions {
//         title
//         children {
//           text
//         }
//       }
//     }
//   }
//   technologies{
//     title
//     techType {
//       id
//       title
//     }
//   }
//   techTypes{
//     id
//     title
//   }
// }