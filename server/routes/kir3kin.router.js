import { graphqlHTTP } from 'express-graphql'
import { typeDefs } from '../Schema/typeDefs.js'
import { resolvers } from '../Schema/resolvers.js'

import { makeExecutableSchema } from '@graphql-tools/schema'

export const kir3kinRouter = graphqlHTTP({
	schema: makeExecutableSchema({
		typeDefs,
		resolvers
	}),
	graphiql: true
})