import React, { useState, useEffect } from "react"
import { iProject } from "../../interfaces/projectsInterface"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { registerProjectDescription, selectProjectsStatus, toggleProjectDescription } from "../../redux/projects/descriptionsSlice"
import { ProjectDesc } from "./ProjectDesc"

type ProjectItemProps = {
	project: iProject
}

export const ProjectItem: React.FC<ProjectItemProps> = ({
	project
}) => {
	const dispatch = useAppDispatch()
	const activeProjects = useAppSelector(selectProjectsStatus)

	
	useEffect(() => {dispatch(registerProjectDescription(project.mainInfo.title))}, [])
	const active = activeProjects[project.mainInfo.title]


	const toggleDescription = (projectName: string): void => {dispatch(toggleProjectDescription(projectName))}


	// ============ project image ========================
	type getProjectImageType = (
		path: string,
		defaultImg?: string
	) => string
	const getProjectImage: getProjectImageType = (
		path,
		defaultImg = 'https://via.placeholder.com/600x600'
	): string => {
		return path ? require(`../../${path}`) : defaultImg
	}

	const projectImg: string = getProjectImage(project.mainInfo.img)
	// ============

	// ============ project in progress ? ============
	const inProgress: string = project.inProgress ? 'example__inprogress' : ''
	// ============

	// ============ project wrap's classes ============
	const columnClasses: string[] = ['portfolio__column']
	if (active) columnClasses.push('portfolio__column--active')
	// ============

	// ============ button for toggle description ============
	const projectBtn: string = active ? "Close" : "Open"
	// ============

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
						<button
							onClick={() => (toggleDescription(project.mainInfo.title))}
							className="example__desc"
						>{projectBtn} Description</button>
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
				{active && <ProjectDesc
					description={project.fullDesc}
				/> }
			</div>
		</div>
	)
}