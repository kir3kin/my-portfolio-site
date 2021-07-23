import React, { useEffect } from 'react'
import { ProjectItem } from '../components/projects/ProjectItem'
import '../assets/scss/blocks/pages/projectsPage.scss'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { getProjects, selectProjects } from '../redux/projects/projectsSlice'

export const ProjectsPage: React.FC = () => {
	const storeProjects = useAppSelector(selectProjects)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(getProjects())
	}, [])
	
	return (
		<section className="portfolio">
			<div className="wrapper">
				<div className="portfolio__wrapper">
					<h1 className="portfolio__title">My projects</h1>
					<div className="portfolio__examples">
						<div className="portfolio__row">
							{Object.keys(storeProjects).map(project_id => {
								return <ProjectItem
									key={project_id}
									project={storeProjects[project_id]}
								/>
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}