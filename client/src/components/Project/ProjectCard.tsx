import React from "react"
import { Link } from "react-router-dom"

import { ShortProjectData } from "@interfaces/project.interface"

import { getProjectImage } from "@services/projectImages"

import { DEFAULT_IMAGES } from "@utils/default"

export const ProjectCard: React.FC<{
	project: ShortProjectData
}> = ({
	project
}) => {
	
	const projectImage = getProjectImage(project.image, DEFAULT_IMAGES.thumb, true)

	return (
		<li>
			<Link
				to={`/project/${project.id}`}
				className="project_card"
			>
				<div className="project_card__img">
					<img
						src={projectImage}
						alt={project.title.toLowerCase()}
					/>
				</div>

				<div className="project_card__wrapper">
					<h4 className="project_card__title">{project.title}</h4>
					<p className="project_card__desc">{project.summary}</p>
				</div>
			</Link>
		</li>
	)
}