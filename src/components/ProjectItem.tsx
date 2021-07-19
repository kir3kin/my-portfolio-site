import React from "react"
import { iOneProject} from "../interfaces/interfaces"

type ProjectItemProps = {
	project: iOneProject,
	changeModalContent(
		projectId: number,
		open: boolean
	): void
}

export const ProjectItem: React.FC<ProjectItemProps> = ({
	project,
	changeModalContent
}) => {

	const placeholderImg = 'https://via.placeholder.com/300x200'
	const projectImg = project.mainInfo.img ? require(`../assets/images/projects/${project.mainInfo.img}`) : placeholderImg

	const inProgress = project.inProgress ? 'example__inprogress' : ''

	return (
		<div className="portfolio__column">
			<div className="portfolio__item example">
				<div className="example__img">
					<a
						className={inProgress}
						href={project.mainInfo.website}>
						<img
							src={projectImg}
							alt={`${project.mainInfo.title} ${project.mainInfo.desc}`.toLowerCase()}
						/>
					</a>
				</div>
				<h3 className="example__title">{project.mainInfo.title} {project.mainInfo.desc}</h3>
				<div className="example__details">
					<button onClick={() => changeModalContent(project.id, true)} className="example__desc">Project Description</button>
					
					<a href={project.mainInfo.github} className="example__link">{project.mainInfo.title} on the github</a>
					<a href={project.mainInfo.website} className="example__link">{project.mainInfo.title} - website</a>
				</div>
			</div>
		</div>
	)
}