import { Middleware } from "redux"
import {
	PayloadAction,
	isRejected
} from "@reduxjs/toolkit"

export const authMiddleware: Middleware = store => next => (action: PayloadAction) => {
	const result = next(action)

	if (isRejected(action)) {
		if (
			action.error.message === 'jwt expired' ||
			action.error.message === 'Authentication error'
		) {
			next({ type: 'auth/checkAuth/fulfilled', payload: false })
		}
	}

  return result
}