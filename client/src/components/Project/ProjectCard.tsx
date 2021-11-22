import React, { useState } from "react"
import { Link } from "react-router-dom"
import { ShortProjectData } from "../../interfaces/project.interface"
import { DEFAULT_CARD_THUMB } from "../../utils/default"

interface iProjectCard {
	project: ShortProjectData
}

export const ProjectCard: React.FC<iProjectCard> = ({ project }) => {
	type thumbType = (image: string, defaultImage?: string) => string
	const getImageThumb: thumbType = (image, defaultImage = DEFAULT_CARD_THUMB) => {
		let temp: string
		if (!image) return defaultImage
		try {
			temp = require(`../../assets/images/projects/thumbs/thumb.${image}`).default
		} catch(e) {
			return defaultImage
		}
		return temp
	}

	const projectImage = getImageThumb(project.image)

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