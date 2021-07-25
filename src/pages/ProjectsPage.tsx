import React, { useEffect } from 'react'
import { ProjectItem } from '../components/projects/ProjectItem'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { getProjects, selectProjects, selectProjectsStatus } from '../redux/projects/projectsSlice'
import { Loader } from '../components/Loader'
import '../assets/scss/blocks/pages/projectsPage.scss'

export const ProjectsPage: React.FC = () => {
	const storeProjects = useAppSelector(selectProjects)
	const projectsStatus = useAppSelector(selectProjectsStatus)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(getProjects())
	}, [])

	const tempErrorMsg = (
		<h2
			className="portfolio__server-error"
		>An error occured. Please contact with administrator:<br/>&lt;i.akhabanin@gmail.com&gt;</h2>
	)
	
	return (
		<section className="portfolio">
			<div className="wrapper">
				<div className="portfolio__wrapper">
					<h1 className="portfolio__title">My projects</h1>

					{projectsStatus === 'loading' && <Loader />}
					{projectsStatus === 'failed' && tempErrorMsg}
					{projectsStatus === 'loaded' && (
						<div className="portfolio__examples">
							<div className="portfolio__row">
								{Object.keys(storeProjects).sort((a,b) => +b-(+a)).map(project_id => {
									return <ProjectItem
										key={project_id}
										project={storeProjects[project_id]}
									/>
								})}
							</div>
						</div>
					)}
				</div>
			</div>
		</section>
	)
}