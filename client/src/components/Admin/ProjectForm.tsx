import React, { useEffect, useState } from "react"

import { useAppDispatch, useAppSelector } from "@redux/hooks"
import { getTechnologies, selectTechnologyList } from "@redux/reducers/technologiesSlice"

import { Info, iProject } from "@interfaces/project.interface"
import { Technology } from "@interfaces/technology.interface"

import { uploadImage } from "@services/uploadImage"
import { getProjectImage } from "@services/projectImages"

import { ProjectInfo } from "@components/Admin/ProjectInfo"

import { DEFAULT_IMAGES } from "@utils/default"
import { createInfo } from "@redux/reducers/projectSlice"

export const ProjectForm: React.FC<{ project: iProject }> = ({ project }) => {
	const dispatch = useAppDispatch()
	const [shortData, setShortData] = useState(project)
	const [infos, setInfos] = useState(project.infos)

	const getChosen = (techs: Technology[] | undefined) => {
		const chosen: Number[] = []
		if (techs) {
			techs.map(tech => {
				chosen.push(Number(tech.id))
				return tech
			})
		}
		return chosen
	}
	const defalultTechs = getChosen(project.technologies)
	
	const [chosenTechs, setChosenTechs] = useState<Number[]>(defalultTechs)

	const defaultImage: {
		name: string,
		value: File | null
	} = {
		name: project.image ? project.image : 'Upload image',
		value: null
	}
	const projectImage = getProjectImage(project.image, DEFAULT_IMAGES.project, false)


	const [image, setImage] = useState(defaultImage)
	const [preview, setPreview] = useState<string>(projectImage)

	const { techs } = useAppSelector(selectTechnologyList)


	useEffect(() => {
		dispatch(getTechnologies())
	}, [dispatch])


	// ====== [START:] Handlers ====== \\
	
	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// console.log('shortData:', shortData)
		// console.log('chosenTechs:', chosenTechs)
		console.log('infos:', infos)
	}

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setShortData(prev => ({
			...prev,
			[e.target.name]: e.target.value
		}))
	}

	const techToggle = (id: string) => {
		const number = Number(id)
		const res = chosenTechs.find(techId => techId === number)

		if (res) setChosenTechs(prev => prev.filter(prevId => prevId !== number))
		else setChosenTechs(prev => ([ ...prev, number ]))
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


	const [newInfo, setNewInfo] = useState<string>('')

	const newInfoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewInfo(e.target.value)
	}

	const addInfoHandler = async () => {
		const result = await dispatch(createInfo({
			id: project.id,
			input: { title: newInfo }
		}))


		if (result.payload && typeof result.payload === 'string') {
			const newInfoData = { id: result.payload, title: newInfo, descriptions: [] }

			setInfos(prev => {
				if (prev) return [ ...prev, newInfoData ]
				return [ newInfoData ]
			})

			setNewInfo('')
		}
	}

	const removeInfoHandler = (id: string) => {
		setInfos(prev => prev?.filter(info => info.id !== id))
	}


	return (
		<form className="edit-project" onSubmit={submitHandler}>

			<h2 className="edit-project__header">Edit project</h2>

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


			{techs && techs.length > 0 && (
				<div className="edit-project__techs">
					<h3 className="edit-project__techs__header">Technologies:</h3>

					<div className="edit-project__tech-list">
						{techs.map(tech => {
							const checked = chosenTechs.find(chosenId => chosenId === Number(tech.id)) ? true : false

							return (
								<div key={tech.id} className="edit-project__tech-list__item">
									<label htmlFor={`tech-${tech.id}`}>{tech.title}</label>
									<input
										placeholder="Enter template"
										type="checkbox"
										name={`tech-${tech.id}`}
										id={`tech-${tech.id}`}
										defaultChecked={checked}
										onChange={() => techToggle(tech.id)}
									/>
								</div>
							)
						})}
					</div>
				</div>
			)}

			<div className="edit-project__info">
				<h3 className="edit-project__info__title">Project info</h3>

				<div className="edit-project__info__add add-info">
					<label htmlFor="new-info">New info title</label>
					<input
						type="text"
						id="new-info"
						name="new-info"
						placeholder="Enter title"
						value={newInfo}
						onChange={newInfoHandler}
					/>
					<button
						type="button"
						disabled={!newInfo}
						onClick={addInfoHandler}
					>+</button>
				</div>

				{infos && infos.length > 0 && (
					<div className="edit-project__info__list">
						{infos.map(info => (
							<ProjectInfo info={info} key={info.id} />
						))}
					</div>
				)}
			</div>

			<div className="edit-project__button">
				<button
					type="submit"
				>Apply</button>
			</div>

		</form>
	)
}