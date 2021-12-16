import React, { useEffect, useMemo } from "react"

import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { getProjects, makeSelectProjectsByTechs } from "../redux/reducers/projectsSlice"
import { getTechnologies, selectTechnologyList, setDefaultChosen } from "../redux/reducers/technologiesSlice"

import { TechList } from "../components/Tech/TechList"
import { ProjectList } from "../components/Project/ProjectList"

import LocalStorageAPI from "../services/localStorage.api"

export const ProjectsPage: React.FC = () => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		const localChosens = LocalStorageAPI.getLocalStorageData('chosens')
		if (localChosens.length > 0) dispatch(setDefaultChosen(localChosens))

		dispatch(getProjects())
		dispatch(getTechnologies())
	}, [dispatch])

	const selectProjectsByTechs = useMemo(makeSelectProjectsByTechs, [])
	const { techs, status: tecsStatus } = useAppSelector(selectTechnologyList)
	const { projects, status: projectsStatus } = useAppSelector(selectProjectsByTechs)

	return (
		<div className="wrapper">
			<div className="container">
				<aside className="sidebar">
					<TechList
						techs={techs}
						status={tecsStatus}
					/>
				</aside>
				<ProjectList
					projects={projects}
					status={projectsStatus}
				/>
			</div>
		</div>
	)
}