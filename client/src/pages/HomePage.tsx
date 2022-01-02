import React, { useEffect, useMemo } from "react"

import { useAppDispatch, useAppSelector } from "@redux/hooks"
import { getProjects, makeSelectProjectsByTechs } from "@redux/reducers/projectsSlice"


import '@scss/pages/HomePage'
import { Sidebar } from "@components/Public/Sidebar/Sidebar"
import { ProjectList } from "@components/Public/Projects/ProjectList"


export const HomePage: React.FC = () => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(getProjects())
	}, [dispatch])

	const selectProjectsByTechs = useMemo(makeSelectProjectsByTechs, [])
	const { projects, status: projectsStatus } = useAppSelector(selectProjectsByTechs)

	return (
		<section className="home-page">
			<Sidebar />

			<ProjectList
				projects={projects}
				status={projectsStatus}
			/>
		</section>
	)
}