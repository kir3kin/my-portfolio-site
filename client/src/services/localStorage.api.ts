import { ChosensType } from "@interfaces/technology.interface"
import { LocaLStorages } from "@interfaces/services.interface"

import { LOCAL_STORAGE } from "@utils/default"

export default class lsAPI {
	static defaultValue: ChosensType | string = ''

	static setStorageData = (
		{ storage, field } : LocaLStorages,
		data = this.defaultValue
	): void => {
		localStorage.setItem(
			LOCAL_STORAGE[storage],
			JSON.stringify({
				[field]: data
			})
		)
	}

	static getStorageData = (
		requestedData : LocaLStorages
	): ChosensType | string => {
		const temp = localStorage.getItem(LOCAL_STORAGE[requestedData.storage])
		const storageData = temp ? JSON.parse(temp) : ''

		if (!storageData || !storageData[requestedData.field]) {
			this.setStorageData(requestedData)
			return this.defaultValue
		} else return storageData[requestedData.field]
	}
}