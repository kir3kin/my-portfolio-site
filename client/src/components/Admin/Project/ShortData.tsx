import React, { useEffect, useState } from "react"

import { useAppDispatch } from "@redux/hooks"
import { updateProjectData } from "@redux/reducers/projectSlice"

import { getServerProjectImage } from "@services/projectImages"
import { uploadPreview } from "@services/uploadPreview"

import { iProject, iShortDataInput } from "@interfaces/project.interface"

export const ShortData: React.FC<{
	project: iProject
}> = ({
	project
}) => {
	// ====== [START:] Default Values ====== \\
	const defaultImage: File | string = project.image ? project.image : 'Upload image'

	const projectImage = getServerProjectImage(project.image)
	// ====== [END:] Default Values ====== \\
	
	const dispatch = useAppDispatch()
	const [image, setImage] = useState<File | string>(defaultImage)
	const [preview, setPreview] = useState<string>(projectImage)
	const [shortData, setShortData] = useState<iProject>(project)
	const [isChanged, setIsChanged] = useState<boolean>(false)

	useEffect(() => {
		setShortData(project)
	}, [project])


	// ====== [START:] Handlers ====== \\
	const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setShortData(prev => ({
			...prev,
			[e.target.name]: e.target.value
		}))
		setIsChanged(true)
	}

	const imageChangeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.currentTarget.files ? e.currentTarget.files[0] : null

		const imageData = file ? file : defaultImage
		
		setImage(imageData)
		setShortData(prev => ({
			...prev, image: (typeof imageData === 'string') ? imageData : imageData.name
		}))
		setIsChanged(true)

		if (file) {
			const newImage = await uploadPreview(file)
			setPreview(newImage)
		} else {
			setPreview(projectImage)
		}
	}

	
	const changeSelectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setShortData(prev => ({
			...prev, isHidden: Boolean(Number(e.target.value))
		}))
		setIsChanged(true)
	}

	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const data: iShortDataInput = {
			title: shortData.title,
			summary: shortData.summary,
			github: shortData.github,
			link: shortData.link,
			showOrder: shortData.showOrder,
			isHidden: shortData.isHidden,
		}

		if (image instanceof File) data.image = image
		if (shortData.description) data.description = shortData.description
		if (shortData.template) data.template = shortData.template

		dispatch(updateProjectData({
			id: shortData.id,
			input: data
		}))
		setIsChanged(false)
	}
	// ====== [END:] Handlers ====== \\

	return (
		<form onSubmit={submitHandler}>
			<div className="edit-project__img">
				<div className="edit-project__img__wrapper">
					<img src={preview} alt={shortData.title.toLocaleLowerCase()} />
				</div>
				<div className="edit-project__img__content">
					<label
						htmlFor="image"
						className="field"
					>{ (typeof image === 'string') ? image : image.name }</label>
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

			<div className="edit-project__field">
				<label htmlFor="order">Order:</label>
				<input
					placeholder="Enter order"
					type="text"
					name="showOrder"
					id="order"
					value={shortData.showOrder}
					onChange={changeHandler}
				/>
			</div>

			<div className="edit-project__field">
				<label htmlFor="hide">Hide:</label>
				<select
					id="hide"
					onChange={changeSelectHandler}
					name="isHidden"
					defaultValue={Number(shortData.isHidden)}
				>
					<option value={1}>Yes</option>
					<option value={0}>No</option>
				</select>
			</div>

			<div className="edit-project__button">
				<button
					type="submit"
					disabled={!isChanged}
				>Apply</button>
			</div>
		</form>
	)
}