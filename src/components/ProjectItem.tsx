import React, { useState } from "react"
import { iOneProject} from "../interfaces/interfaces"

type ProjectItemProps = {
	project: iOneProject,
	changeModalContent(
		projectId: number,
		open: boolean
	): void
}

// export const ProjectItem: React.FC<ProjectItemProps> = ({
export const ProjectItem: React.FC<any> = ({
	project
	// changeModalContent
}) => {

	const [active, setActive] = useState<boolean>(false)

	const toggleProject = () => {
		setActive(prev => !prev)
	}


	const defaultImg = 'https://via.placeholder.com/600x600'
	// const projectImg = project.mainInfo.img ? require(`../${project.mainInfo.img}`) : defaultImg

	const inProgress = project.inProgress ? 'example__inprogress' : ''

	console.log('project:', project)

const columnClasses = ['portfolio__column']
// if (active) columnClasses.push('portfolio__column--active')
columnClasses.push('portfolio__column--active')

	return (
		<div className={columnClasses.join(' ')}>
			<div className="portfolio__item example">
				<div className="example__img">
					<a
						className={inProgress}
						href={project.mainInfo.website}>
						<img
							src={defaultImg}
							alt={`${project.mainInfo.title} ${project.mainInfo.desc}`.toLowerCase()}
						/>
					</a>
				</div>

				<div className="example__body">
					<h3 className="example__title">{project.mainInfo.title} {project.mainInfo.desc}</h3>
					<div className="example__details">
						<button onClick={() => toggleProject()} className="example__desc">Project Description</button>
						<a href={project.mainInfo.github} className="example__link">{project.mainInfo.title} on the github</a>
						<a href={project.mainInfo.website} className="example__link">{project.mainInfo.title} - website</a>
					</div>
				</div>
			</div>
		</div>
	)
}