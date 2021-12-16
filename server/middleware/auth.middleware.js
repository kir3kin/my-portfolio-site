import config from "config"
import jwt from "jsonwebtoken"
import { ERROR_MESSAGES } from "../utils/const.js"

export default async (resolve, root, args, context, info) => {
	if (context.req.method === 'OPTOINS') {
		return await resolve(root, args, context, info)
	}
	try {
		const token = context.req.headers.authorization.split(' ')[1]

		if (!token) {
			throw new Error(ERROR_MESSAGES.auth)
		}
		const decoded = jwt.verify(token, config.get('jwtSecret'))

		context.user = decoded

		return await resolve(root, args, context, info)
	} catch (e) {
		throw new Error(ERROR_MESSAGES.auth)
	}

	// return await resolve(root, args, context, info)
}
