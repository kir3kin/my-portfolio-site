import React from "react"
import { LoadingStatus } from "../interfaces/loading.interface"
import { ShortProjectData } from "../interfaces/project.interface"
import { Loader } from "./Loader"
import { ProjectCard } from "./ProjectCard"

interface iProjectList {
	projects: ShortProjectData[],
	status: LoadingStatus
}

export const ProjectList: React.FC<iProjectList> = ({ projects, status }) => {
	
	return (
		<>
			{status === 'loading' && <Loader />}
			{status === 'failed' && <p>Error</p>}
			{status === 'loaded' && (
				<ul className="projects__list">
					{projects.map(project => {
						return <ProjectCard 
							key={project.id}
							project={project}
						/>
					})}
				</ul>
			)}
		</>
	)
}