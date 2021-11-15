import React, { useState } from "react"
import { Link } from "react-router-dom"
import { ShortProjectData } from "../interfaces/project.interface"
import { DEFAULT_CARD_THUMB } from "../utils/default"

interface iProjectCard {
	project: ShortProjectData
}

export const ProjectCard: React.FC<iProjectCard> = ({ project }) => {
	const projectImage = project.image ?  require(`../assets/images/projects/${project.image}.jpg`).default : DEFAULT_CARD_THUMB

	return (
		<li className="project_card">
			<Link to={`/project/${project.id}`}>
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