import { ApolloServer } from "apollo-server-express"
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'

export const LaunchApolloServer = async (schema, app, path) => {
	const server = new ApolloServer({
		schema,
		context: ({ req, res }) => ({ req, res }),
		plugins: [ ApolloServerPluginLandingPageGraphQLPlayground() ]
	})
	await server.start()
	server.applyMiddleware({ app, path })
}