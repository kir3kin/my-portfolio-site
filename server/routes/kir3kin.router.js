import { graphqlHTTP } from 'express-graphql'
import { ApolloServer } from 'apollo-server-express'
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
import { typeDefs } from '../Schema/typeDefs.js'
import { resolvers } from '../Schema/resolvers.js'

import { makeExecutableSchema } from '@graphql-tools/schema'

// without #1
export const kir3kinRouter = graphqlHTTP({
	schema: makeExecutableSchema({
		typeDefs,
		resolvers
	}),
	graphiql: true
})

// with apollo-server #2
export const kir3kinPath = '/api/kir3kin'
export const kir3kinApolloServer = new ApolloServer({
	typeDefs,
	resolvers,
	plugins: [
		ApolloServerPluginLandingPageGraphQLPlayground()
	]
})