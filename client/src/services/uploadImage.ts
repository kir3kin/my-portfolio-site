export const uploadImage = async (file: File) => {
	return new Promise<string>((resolve, reject) => {
		const reader = new FileReader()
		reader.onload = () => {
			const img = new Image()
			img.onload = () => {
				resolve(img.src)
			}
			if (typeof reader.result === 'string') img.src = reader.result
		}
		reader.readAsDataURL(file)
	})
}