import React from "react"
import { iProject } from "../interfaces/project.interface"
import { DEFAULT_PROJECT_IMG, PROJECT_IMAGE_EXTENTION, PROJECT_IMAGE_FOLDER } from "../utils/default"
import { getNormalName } from "../utils/technology"
import { ComeBack } from "./ComeBack"
import { ProjectInfo } from "./ProjectInfo"

interface iProjectDesc {
	project: iProject
}

export const ProjectDesc: React.FC<iProjectDesc> = ({ project }) => {

	// console.log('project:', project)
	const projectImage = project.image ? require('../assets/images/projects/'+ project.image + PROJECT_IMAGE_EXTENTION).default : DEFAULT_PROJECT_IMG
	// const projectImage = project.image ? require(`../assets/images/projects/${project.image}.jpg`).default : DEFAULT_PROJECT_IMG
	
	return (
		
		<main className="project">
			<ComeBack />
			<div className="project__about">
				<div className="project__img">
					<img src={projectImage} alt={project.title.toLowerCase()} />
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
								className="description__link"
								title="Project's Repository"
							>
								GitHub
							</a>
							<a
								href={project.link}
								className="description__link"
								title="Project's Website"
							>
								Website
							</a>
							{project.template && (
								<a
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
						<p>{project.summary}</p>
					</div>
					
					{project.technologies.length >= 1 && (
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
			{project.infos.length >= 1 && (
				<ul className="project__info info-list">
					{project.infos.map(info => {
						return <ProjectInfo
							key={info.id}
							info={info}
						/>
					})}
				</ul>
			)}
		</main>
	)
}