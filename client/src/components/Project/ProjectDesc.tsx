import React, { useState } from "react"
import { iProject } from "../../interfaces/project.interface"
import { DEFAULT_PROJECT_IMG } from "../../utils/default"
import { getNormalName } from "../../utils/functions"
import { ModalImage } from "./ModalImage"
import { ProjectInfo } from "./ProjectInfo"

interface iProjectDesc {
	project: iProject
}

export const ProjectDesc: React.FC<iProjectDesc> = ({ project }) => {
	const [modal, setModal] = useState<boolean>(false)
	type thumbType = (image: string | undefined, defaultImage?: string) => string
	
	const getImageThumb: thumbType = (image, defaultImage = DEFAULT_PROJECT_IMG) => {
		let temp: string
		if (!image) return defaultImage
		try {
			temp = require(`../../assets/images/projects/${image}`).default
		} catch(e) {
			return defaultImage
		}
		return temp
	}

	const projectImage = getImageThumb(project.image)
	const toggleModal = () => { setModal(!modal) }

	return (
		<main className="project">
			<div className="project__about">
				<div className="project__img">
					<img
						src={projectImage}
						alt={project.title.toLowerCase()}
						onClick={toggleModal}
					/>
				</div>
				<div className="project__desc description">
					<h1
						className="description__header header--stylish"
						title="Project's Title"
					>
						{project.title}
					</h1>
					<div className="description__links">
						<div>
							<a
								href={project.github}
								target="_blank"
								className="description__link"
								title="Project's Repository"
							>
								GitHub
							</a>
							<a
								href={project.link}
								target="_blank"
								className="description__link"
								title="Project's Website"
							>
								Website
							</a>
							{project.template && (
								<a
									target="_blank"
									href={project.template}
									title="Project's Template"
									className="description__link"
								>
									Template
								</a>
							)}
						</div>
					</div>

					<div
						className="description__summary"
						title="Project's Description"
					>
						<p>{project.description ? project.description : project.summary}</p>
					</div>
					
					{project.technologies && project.technologies.length >= 1 && (
						<ul className="description__techs techs-list">
							{project.technologies.map(tech => {
								return <li
									key={tech.id}
									className={`techs-list__item techs-list__item--${getNormalName(tech.techType.title)}`}
								>
									{tech.title}
								</li>
							})}
						</ul>
					)}

				</div>
			</div>
			{project.infos && project.infos.length >= 1 && (
				<ul className="project__info info-list">
					{project.infos.map(info => {
						return <ProjectInfo
							key={info.id}
							info={info}
						/>
					})}
				</ul>
			)}
			{project.image && modal && (
				<ModalImage
					image={projectImage}
					toggle={toggleModal}
				/>
			)}
		</main>
	)
}