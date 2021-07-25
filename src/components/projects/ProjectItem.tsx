import React, { useEffect, useRef, useMemo, useCallback } from "react"
import { iProject } from "../../interfaces/projects"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { registerProjectDescription, selectDescriptionStatus, toggleProjectDescription } from "../../redux/projects/descriptionsSlice"
import { ProjectDesc } from "./ProjectDesc"
import { CSSTransition } from 'react-transition-group'
import type { RootState } from '../../redux/store';

export const ProjectItem: React.FC<{project: iProject}> = ({
	project
}) => {
	const dispatch = useAppDispatch()
	
	// ============ project item's render's optimization ============
	const selectCurrentDescription = useMemo(selectDescriptionStatus, [])
	const selectDescriptionStatusByTitle = (projectTitle: string) => (state: RootState) => selectCurrentDescription(state, projectTitle)
	// ============
	const isActive = useAppSelector(selectDescriptionStatusByTitle(project.mainInfo.title))

	// ============ project registration in store ============
	useEffect(() => {dispatch(registerProjectDescription(project.mainInfo.title))}, [])
	// ============
	
	const projectWrap = useRef<HTMLDivElement>(null)
	const scrollWindowToProject = useCallback((time: number): void => {
		setTimeout(()=> {
			window.scrollTo({
				top: projectWrap.current!.offsetTop,
				behavior: "smooth"
			})
		}, time)
	}, [])
	
	const toggleDescription = useCallback((projectTitle: string) => {
		dispatch(toggleProjectDescription(projectTitle))
		scrollWindowToProject(1100)
	}, [])

	// ============ project image ========================
	const getProjectImage = (
		path: string,
		defaultImg: string = 'https://via.placeholder.com/600x600'
	): string => path ? require(`../../${path}`) : defaultImg
	const projectImg: string = useMemo(() => getProjectImage(project.mainInfo.img), [])
	// ============

	// ============ project in progress ? ============
	const inProgress: string = project.inProgress ? 'example__inprogress' : ''
	// ============

	// ============ project wrap's classes ============
	const columnClasses: string[] = ['portfolio__column']
	if (isActive) columnClasses.push('portfolio__column--active')
	// ============

	// ============ button for toggle description ============
	const projectBtn: string = isActive ? "Close" : "Open"
	// ============

	return (
		<div
			ref={projectWrap}
			className={columnClasses.join(' ')}
		>
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

				<CSSTransition
					in={isActive}
					timeout={{
						enter: 2000,
						exit: 1500
					}}
					classNames={'project-description'}
					mountOnEnter
					unmountOnExit
				>
					<ProjectDesc description={project.fullDesc} />
				</CSSTransition>
			</div>
		</div>
	)
}