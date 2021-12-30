import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import { v4 as uuidv4 } from 'uuid'
import { finished } from 'stream/promises'

import { IMAGE_SIZE } from './const.js'


export class imageAPI {
	static imagesFolder = path.resolve(path.resolve(), 'images')
	static imagesThumbs = path.join(this.imagesFolder, 'thumbs')

	static create = async newImage => {
		const { createReadStream, filename, mimetype, encoding } = await newImage

		const [type, ext] = mimetype.split('/')
		const newName = `${uuidv4()}.${ext}`

		const stream = createReadStream()

		const out = fs.createWriteStream(`${this.imagesFolder}/${newName}`)
		const thumbOut = fs.createWriteStream(`${this.imagesThumbs}/${newName}`)

		const transformer = sharp().resize(IMAGE_SIZE.thumb.width, IMAGE_SIZE.thumb.height)

		stream.pipe(out)
		stream.pipe(transformer).pipe(thumbOut)

		await finished(out)
		await finished(thumbOut)

		return newName
	}

	static delete= async imageName => {
		try {
			fs.unlinkSync(path.join(this.imagesFolder, imageName))
			fs.unlinkSync(path.join(this.imagesThumbs, imageName))
		} catch (e) {}
	}

}