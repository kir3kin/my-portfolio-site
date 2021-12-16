export const SERVER_LINK: string = (process.env.NODE_ENV === 'production') ?
	'/api/kir3kin/public' :
	'http://localhost:5080/api/kir3kin/public'

export const HOME_LINK: string = '/'
export const storageName: string = 'FilterData'

export const DEFAULT_IMAGES: {[key: string]: string} = {
	thumb: 'http://via.placeholder.com/250x200',
	project: 'http://via.placeholder.com/600x370'
}