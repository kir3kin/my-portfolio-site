import { ImageType } from "@interfaces/services.interface"

export const getProjectImage: ImageType = (
	image,
	defaultImage,
	thumb = false
) => {
	let temp: string
	if (!image) return defaultImage

	try {
		const imagePath = thumb ? '/thumbs/thumb.' : '/'
		temp = require(`@images/projects${imagePath + image}`)
		return temp
	} catch(e) {
		return defaultImage
	}
}