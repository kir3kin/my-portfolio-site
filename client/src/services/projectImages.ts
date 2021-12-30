import { ImageType } from "@interfaces/services.interface"

export const getServerProjectImage: ImageType = (
	image,
	thumb = false
) => {
	if (!image) {
		if (thumb) return String(process.env.DEFAULT_IMAGE_THUMB)
		else return String(process.env.DEFAULT_IMAGE_PROJECT)
	}
	const imagePath = thumb ? '/thumbs/' : '/'
	return process.env.API_IMAGES + imagePath + image
}