import { Middleware } from "redux"
import { PayloadAction } from "@reduxjs/toolkit"

import { ChosensType } from "@interfaces/technology.interface"
import { StorageType } from "@interfaces/services.interface"

import lsAPI from "@services/localStorage.API"

export const localStorageMiddleware: Middleware = (store) => (next) => (action: PayloadAction) => {
	const result = next(action)

	if (action.type === 'projectList/toggleTech') {
		const chosens: ChosensType = store.getState().technologyList.chosens
		lsAPI.setStorageData(
			{
				storage: StorageType.FILTER,
				field: 'chosens'
			},
			chosens
		)
	}

	if (action.type === 'auth/userLogin/fulfilled') {
		const token: string = store.getState().auth.token
		lsAPI.setStorageData(
			{
				storage: StorageType.USER,
				field: 'token'
			},
			token
		)
	}

  return result
}