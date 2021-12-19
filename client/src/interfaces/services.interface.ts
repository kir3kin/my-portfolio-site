export type ImageType = (
	image: string | undefined,
	defaultImage: string,
	thumb: boolean
) => string


type filterStorageFields = 'chosens' | 'categories'
type userStorageFields = 'token'

export type StorageNames = 'filter' | 'user'
export enum StorageType {
	FILTER = 'filter',
	USER = 'user'
}

interface FilterStorage {
	storage: StorageType.FILTER
	field: filterStorageFields
}

interface UserStorage {
	storage: StorageType.USER
	field: userStorageFields
}

export type LocaLStorages = FilterStorage | UserStorage

