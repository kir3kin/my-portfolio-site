import React, { useEffect } from "react"

import { useAppDispatch, useAppSelector } from "@redux/hooks"

import {
	getProjects,
	getProjectsMainData,
	selectProjectsData,
	selectProjectsMainData
} from "@redux/reducers/projectsSlice"
import {
	getTechnologies,
	selectTechsData
} from "@redux/reducers/technologiesSlice"
import {
	getUsers,
	selectUsersData
} from "@redux/reducers/usersSlice"

import '@scss/pages/Admin/AdminPage'
import { ProjectList } from "@components/Admin/Project/ProjectList"



export const AdminPage: React.FC = () => {
	const dispatch = useAppDispatch()
	
	const { projects, status: projectStatus } = useAppSelector(selectProjectsMainData)
	const { techs, status: techsStatus } = useAppSelector(selectTechsData)
	const { users, status: usersStatus } = useAppSelector(selectUsersData)

	// console.log('projects:', projects)


	useEffect(() => {
		dispatch(getProjectsMainData())
		// dispatch(getTechnologies())
		// dispatch(getUsers())
	}, [dispatch])

	// console.log('projects:', projects)
	// console.log('techs:', techs)
	// console.log('users:', users)



	return (
		<section className="admin-page">
			<h1 className="admin-page__header header--stylish">Admin panel</h1>
			<div className="admin-page__wrapper">
				<ProjectList type="project" list={projects} />
				{/* <EditList type="technology" list={techs} /> */}
			</div>
		</section>
	)
}