import { ApolloServer } from "apollo-server-express"
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'

import { graphqlUploadExpress } from 'graphql-upload'

export const LaunchApolloServer = async (schema, app, path, useUpload = false) => {
	if (useUpload) app.use(graphqlUploadExpress())

	const server = new ApolloServer({
		schema,
		context: ({ req, res }) => ({ req, res }),
		plugins: [ ApolloServerPluginLandingPageGraphQLPlayground() ]
	})
	await server.start()

	server.applyMiddleware({ app, path })
}