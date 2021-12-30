import React, { useState } from "react"

import { ModalImage } from "./ModalImage"
import { ProjectInfo } from "./ProjectInfo"

import { iProject } from "@interfaces/project.interface"

import { getServerProjectImage } from "@services/projectImages"
import { getNormalName } from "@services/normaName"


export const ProjectDesc: React.FC<{
	project: iProject
}> = ({
	project
}) => {
	const [modal, setModal] = useState<boolean>(false)
	const projectImage = getServerProjectImage(project.image)
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
							{project.technologies.map(tech => (
								<li
									key={tech.id}
									className={`
										techs-list__item
										techs-list__item--${getNormalName(tech.techType.title)}
									`}
								>
									{tech.title}
								</li>
							))}
						</ul>
					)}

				</div>
			</div>
			{project.infos && project.infos.length >= 1 && (
				<ul className="project__info info-list">
					{project.infos.map(info => (
						<ProjectInfo
							key={info.id}
							info={info}
						/>
				))}
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