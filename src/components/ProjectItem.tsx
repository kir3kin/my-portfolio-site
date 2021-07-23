import React, { useState } from "react"
import { iProject } from "../interfaces/projectsInterface"
import { ProjectDesc } from "./ProjectDesc"

type ProjectItemProps = {
	project: iProject
}

export const ProjectItem: React.FC<ProjectItemProps> = ({
	project
}) => {

	const [active, setActive] = useState<boolean>(false)
	const toggleProject = () => {
		setActive(prev => !prev)
	}

	const defaultImg: string = 'https://via.placeholder.com/600x600'
	const projectImg: string = project.mainInfo.img ? require(`../${project.mainInfo.img}`) : defaultImg

	const inProgress: string = project.inProgress ? 'example__inprogress' : ''

	const columnClasses: string[] = ['portfolio__column']
	if (active) columnClasses.push('portfolio__column--active')
	const projectBtn: string = active ? "Close" : "Open"

	return (
		<div className={columnClasses.join(' ')}>
			<div className="portfolio__item example">
				<div className="example__img">
					<a
						target="_blank"
						className={inProgress}
						href={project.mainInfo.website}>
						<img
							src={projectImg}
							alt={`${project.mainInfo.title} ${project.mainInfo.desc}`.toLowerCase()}
						/>
					</a>
				</div>

				<div className="example__body">
					<h3 className="example__title">{project.mainInfo.title} {project.mainInfo.desc}</h3>
					<div className="example__details">
						<button onClick={() => toggleProject()} className="example__desc">{projectBtn} Description</button>
						<a
							target="_blank"
							href={project.mainInfo.github}
							className="example__link"
							>GitHub</a>
						<a
							target="_blank"
							href={project.mainInfo.website}
							className="example__link"
						>Website</a>
					</div>
				</div>
				{active && <ProjectDesc description={project.fullDesc} /> }
			</div>
		</div>
	)
}