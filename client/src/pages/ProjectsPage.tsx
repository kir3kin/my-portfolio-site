import React, { useCallback, useEffect, useMemo } from "react"
import { ProjectList } from "../components/ProjectList"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { getProjects, selectProjectList, selectProjectListStatus, makeSelectProjectsByTechs } from "../redux/reducers/projectsSlice"
import { getTechnologies, selectChosen, selectTechnologyList, selectTechnologyListStatus } from "../redux/reducers/technologiesSlice"
import { TechInputs } from "../components/TechInputs"

export const ProjectsPage: React.FC = () => {
	const dispatch = useAppDispatch()
	useEffect(() => {
			dispatch(getProjects())
			dispatch(getTechnologies())
	}, [dispatch])

	// const some = useAppSelector(makeSelectProjectsByTechs)
	const selectProjectsByTechs = useMemo(makeSelectProjectsByTechs, [])

	const commonStore = {
		
		projectList: useAppSelector(selectProjectsByTechs),
		technologyList: useAppSelector(selectTechnologyList),
		projectsStatus: useAppSelector(selectProjectListStatus),
		technologiesStatus: useAppSelector(selectTechnologyListStatus)
	}
	
	return (
		<div className="wrapper">
			<div className="container">
				<aside className="sidebar">
					<TechInputs
						techs={commonStore.technologyList}
						status={commonStore.technologiesStatus}
					/>
				</aside>
				<main className="projects">
					<h1 className="projects__header header--stylish">Projects</h1>

					{(commonStore.projectList.length >= 1) ? (
						<ProjectList
							projects={commonStore.projectList}
							status={commonStore.projectsStatus}
						/>
					) : (<p className="projects__notfoud">No projects are found!</p>)}
				</main>
			</div>
		</div>
	)
}