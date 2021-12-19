import { StorageNames } from "@interfaces/services.interface"

const isProd = process.env.NODE_ENV === 'production'

export const SERVER_LINKS: {[key: string]: string} = {
	public: isProd ? '/api/kir3kin/public' : 'http://localhost:5080/api/kir3kin/public',
	private: isProd ? '/api/kir3kin/private' : 'http://localhost:5080/api/kir3kin/private',

}

export const HOME_LINK: string = '/'

export const LOCAL_STORAGE: Record<StorageNames, string> = {
	filter: 'FilterData',
	user: 'UserData'
}

export const DEFAULT_IMAGES: {[key: string]: string} = {
	thumb: 'http://via.placeholder.com/250x200',
	project: 'http://via.placeholder.com/600x370'
}