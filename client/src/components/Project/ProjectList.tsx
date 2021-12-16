import React from "react"
import { LoadingStatus } from "../../interfaces/loading.interface"
import { ShortProjectData } from "../../interfaces/project.interface"
import { ComponentNotfound } from "../../blocs/ComponentNotfound"
import { LoadingError } from "../../blocs/LoadingError"
import { Loader } from "../../blocs/Loader"
import { ProjectCard } from "../Project/ProjectCard"
import { Messages } from "../../utils/messages"

interface iProjectList {
	projects: ShortProjectData[],
	status: LoadingStatus
}

export const ProjectList: React.FC<iProjectList> = ({
	projects, status
}) => (
	<main className="projects">
		{status === 'loading' && <Loader />}
		{status === 'failed' && <LoadingError name="Project list" />}
		{status === 'loaded' && (
			<>
				<h1
					className="projects__header header--stylish"
				>
					=== [ Projects ] ===
					<span>{Messages.projectsTip}</span>
				</h1>
				{projects.length >= 1 ? (
					<ul className="projects__list">
						{projects.map(project => {
							return <ProjectCard 
								key={project.id}
								project={project}
							/>
						})}
					</ul>
				) : (
					<ComponentNotfound name="projects" />
				)}
			</>
		)}
	</main>
)