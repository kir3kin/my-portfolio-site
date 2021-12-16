import { PayloadAction } from "@reduxjs/toolkit"
import { Middleware } from "redux"

import {
	getLocalDataType,
	setLocalStorageDataType
} from "../interfaces/api.interface"
import { ChosensType } from "../interfaces/technology.interface"

import { storageName } from "../utils/default"


export default class LocalStorageAPI {

	static defaultValue: ChosensType = []

	static setLocalStorageData: setLocalStorageDataType = (
		name, data = LocalStorageAPI.defaultValue
	) => {
		localStorage.setItem(storageName, JSON.stringify({
			[name]: data
		}))
	}

	static getLocalStorageData: getLocalDataType = (name) => {
		const temp = localStorage.getItem(storageName)
		const storage = temp ? JSON.parse(temp) : ''

		if (!storage || !storage[name]) {
			LocalStorageAPI.setLocalStorageData(name)
			return LocalStorageAPI.defaultValue
		} else return storage[name]
	}
}

export const localStorageMiddleware: Middleware = (store) => (next) => (action: PayloadAction) => {
	const result = next(action)

	if (action.type === 'projectList/toggleTech' ) {
		const chosens: ChosensType = store.getState().technologyList.chosens
		LocalStorageAPI.setLocalStorageData('chosens', chosens)
	}
	
  return result
}