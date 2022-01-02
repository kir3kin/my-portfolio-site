import React from "react"
import { Link } from "react-router-dom"

import { ShortProjectData } from "@interfaces/project.interface"

import { getServerProjectImage } from "@services/projectImages"


export const ProjectCard: React.FC<{
	project: ShortProjectData
}> = ({
	project
}) => {
	const projectThumb = getServerProjectImage(project.image, true)

	return (
		<li>
			<Link
				to={`/project/${project.id}`}
				className="project_card"
			>
				<div className="project_card__img">
					<img
						src={projectThumb}
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