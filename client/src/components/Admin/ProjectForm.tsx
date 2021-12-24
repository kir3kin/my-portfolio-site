import { ProjectInfo } from "@components/Project/ProjectInfo"
import { iProject } from "@interfaces/project.interface"
import { useAppDispatch, useAppSelector } from "@redux/hooks"
import { getTechnologies, selectTechnologyList, selectTechsData } from "@redux/reducers/technologiesSlice"
import { getProjectImage } from "@services/projectImages"
import { DEFAULT_IMAGES } from "@utils/default"
import React, { useEffect, useState } from "react"


const defaultForm = {
	title: '',
	summary: '',
	description: '',
	github: '',
	link: '',
	template: ''
}

const defaultImage = {
	name: 'Upload image',
	value: {}
}


export const ProjectForm: React.FC<{
	project: iProject
}> = ({
	project
}) => {
	const dispatch = useAppDispatch()
	const [form, setForm] = useState(project)
	const [chosenTechs, setChosenTechs] = useState(project.technologies)
	const [infos, setInfos] = useState(project.infos)
	const [image, setImage] = useState(defaultImage)

	const { techs, status } = useAppSelector(selectTechnologyList)

	useEffect(() => {
		dispatch(getTechnologies())
	}, [dispatch])


	console.log('project:', project)

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setForm(prev => ({
			...prev,
			[e.target.name]: e.target.value
		}))
	}


	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('form:', form)
	}


	const projectImage = getProjectImage(project.image, DEFAULT_IMAGES.project, false)

	return (
		<form className="edit-project" onSubmit={submitHandler}>

			<h2 className="edit-project__header">Edit project</h2>

			<div className="edit-project__img">
				<div className="edit-project__img__wrapper">
					<img src={projectImage} alt={project.title.toLocaleLowerCase()} />
				</div>
				<div className="edit-project__img__content">
					<label
						htmlFor="image"
						className="field"
					>{project.image}</label>
					<input
						type="file"
						name="image"
						id="image"
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
					value={form.title}
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
					value={form.summary}
					required
				></textarea>
			</div>

			<div className="edit-project__field">
				<label htmlFor="description">Description:</label>
				<textarea
					id="description"
					name="description"
					placeholder="Enter description"
					value={form.description ? form.description : ''}
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
					value={form.github}
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
					value={form.link}
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
					value={form.template ? form.template : ''}
					onChange={changeHandler}
				/>
			</div>


			{techs && techs.length > 0 && (
				<div className="edit-project__techs">
					<h3 className="edit-project__techs__header">Technologies:</h3>

					<div className="edit-project__tech-list">
						{techs.map(tech => {
							const checked = project.technologies?.find(technology => technology.id === tech.id) ? true : false

							return (
								<div key={tech.id} className="edit-project__tech-list__item">
									<label htmlFor={`tech-${tech.id}`}>{tech.title}</label>
									<input
										placeholder="Enter template"
										type="checkbox"
										name={`tech-${tech.id}`}
										id={`tech-${tech.id}`}
										defaultChecked={checked}
									/>
								</div>
							)
						})}
					</div>
				</div>
			)}

			{project.infos && project.infos.length > 0 && (
				<div className="edit-project__info">
					<h3>Description</h3>
					{project.infos.map(info => (
						<ProjectInfo info={info} key={info.id} />
					))}
				</div>
			)}

			<div className="edit-project__button">
				<button
					type="submit"
				>Apply</button>
			</div>


		</form>
	)
}