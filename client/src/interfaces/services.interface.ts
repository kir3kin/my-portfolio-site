import { ChosensType } from "./technology.interface"

export type getLocalDataType = (name: string) => ChosensType

export type setLocalStorageDataType = (
	name: string,
	data?: any
) => void

export type ImageType = (
	image: string | undefined,
	defaultImage: string,
	thumb: boolean
) => string

