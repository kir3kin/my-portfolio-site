import React, { useState } from "react"

import { getProjectImage } from "@services/projectImages"
import { uploadImage } from "@services/uploadImage"

import { iProject } from "@interfaces/project.interface"

import { DEFAULT_IMAGES } from "@utils/default"


export const ShortData: React.FC<{
	project: iProject
}> = ({
	project
}) => {
	// ====== [START:] Default Values ====== \\
	const defaultImage: {
		name: string, 
		value: File | null
	} = {
		name: project.image ? project.image : 'Upload image',
		value: null
	}

	const projectImage = getProjectImage(project.image, DEFAULT_IMAGES.project, false)
	// ====== [END:] Default Values ====== \\
	
	const [image, setImage] = useState(defaultImage)
	const [preview, setPreview] = useState<string>(projectImage)
	const [shortData, setShortData] = useState(project)

	// ====== [START:] Handlers ====== \\
	const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setShortData(prev => ({
			...prev,
			[e.target.name]: e.target.value
		}))
	}

	const imageChangeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.currentTarget.files ? e.currentTarget.files[0] : null

		const imageData = {
			value: file,
			name: file ? file.name : defaultImage.name
		}
		setImage(imageData)
		setShortData(prev => ({
			...prev, image: imageData.name
		}))

		if (file) {
			const newImage = await uploadImage(file)
			setPreview(newImage)
		} else {
			setPreview(projectImage)
		}
	}
	// ====== [END:] Handlers ====== \\

	return (
		<>
			<div className="edit-project__img">
				<div className="edit-project__img__wrapper">
					<img src={preview} alt={project.title.toLocaleLowerCase()} />
				</div>
				<div className="edit-project__img__content">
					<label
						htmlFor="image"
						className="field"
					>{image.name}</label>
					<input
						type="file"
						name="image"
						id="image"
						onChange={imageChangeHandler}
					/>
				</div>
			</div>

			<div className="edit-project__field">
				<label htmlFor="title">Title:</label>
				<input
					placeholder="Enter title"
					type="text"
					name="title"
					id="title"
					value={shortData.title}
					onChange={changeHandler}
					required
				/>
			</div>

			<div className="edit-project__field">
				<label htmlFor="summary">Summary:</label>
				<textarea
					id="summary"
					name="summary"
					placeholder="Enter summary"
					onChange={changeHandler}
					value={shortData.summary}
					required
				></textarea>
			</div>

			<div className="edit-project__field">
				<label htmlFor="description">Description:</label>
				<textarea
					id="description"
					name="description"
					placeholder="Enter description"
					value={shortData.description ? shortData.description : ''}
					onChange={changeHandler}
				></textarea>
			</div>

			<div className="edit-project__field">
				<label htmlFor="github">GitHub:</label>
				<input
					placeholder="Enter title"
					type="text"
					name="github"
					id="github"
					value={shortData.github}
					onChange={changeHandler}
					required
				/>
			</div>

			<div className="edit-project__field">
				<label htmlFor="link">Link:</label>
				<input
					placeholder="Enter title"
					type="text"
					name="link"
					id="link"
					value={shortData.link}
					onChange={changeHandler}
					required
				/>
			</div>

			<div className="edit-project__field">
				<label htmlFor="template">Template:</label>
				<input
					placeholder="Enter template"
					type="text"
					name="template"
					id="template"
					value={shortData.template ? shortData.template : ''}
					onChange={changeHandler}
				/>
			</div>
		</>
	)
}