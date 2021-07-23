import React, { useState, useEffect } from 'react'
import { ProjectItem } from '../components/ProjectItem'
import '../assets/scss/blocks/pages/projectsPage.scss'
import { iProjects } from "../interfaces/projectsInterface"
import { getProjects } from '../projects/projects'

export const ProjectsPage: React.FC = () => {
	const [myProjects, setMyProjects] = useState({} as iProjects)
	useEffect(() => {
		getProjects().then(res => {
			setMyProjects(res)
		})
		.catch(e => console.log('error:', e))
	}, [])
	
	return (
		<section className="portfolio">
			<div className="wrapper">
				<div className="portfolio__wrapper">
					<h1 className="portfolio__title">My projects</h1>
					<div className="portfolio__examples">
						<div className="portfolio__row">
							{Object.keys(myProjects).map(project_id => {
								return <ProjectItem
									key={project_id}
									project={myProjects[project_id]}
								/>
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}