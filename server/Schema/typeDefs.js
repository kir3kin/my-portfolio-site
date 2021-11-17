export const typeDefs = `
	scalar Date

	"""
	Projects Table
	"""
	type Project {
		id: ID!
		title: String!
		summary: String!
		image: String
		link: String!
		github: String!
		template: String
		inWorking: Boolean!
		isHide: Boolean!
		createdAt: Date!
		updatedAt: Date!
		infos: [Info!]
		technologies: [Technology!]
		authors: [User!]!
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
	Main Queries
	"""
	type Query {
		projects: [Project!]!
		project(id: ID!): Project
		technologies: [Technology!]!
		techTypes: [techType!]!
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