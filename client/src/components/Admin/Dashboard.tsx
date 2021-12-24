import { useAppDispatch, useAppSelector } from "@redux/hooks"
import { getProjects, selectProjectsData } from "@redux/reducers/projectsSlice"
import { getTechnologies, selectTechsData } from "@redux/reducers/technologiesSlice"
import { getUsers, selectUsersData } from "@redux/reducers/usersSlice"
import React, { useEffect } from "react"
import { EditList } from "./EditList"

export const Dashboard: React.FC = () => {
	const dispatch = useAppDispatch()
	
	const { projects, status: projectStatus } = useAppSelector(selectProjectsData)
	const { techs, status: techsStatus } = useAppSelector(selectTechsData)
	const { users, status: usersStatus } = useAppSelector(selectUsersData)


	useEffect(() => {
		dispatch(getProjects())
		// dispatch(getTechnologies())
		// dispatch(getUsers())
	}, [dispatch])

	// console.log('projects:', projects)
	// console.log('techs:', techs)
	// console.log('users:', users)



	return (
		<section className="admin-page">
			<div className="wrapper">
				<div className="container">
					<h1 className="admin-page__header header--stylish">Admin panel</h1>
					<div className="admin-page__wrapper">
						<EditList type="project" list={projects} />
						{/* <EditList type="technology" list={techs} /> */}
					</div>
				</div>
			</div>
		</section>
	)
}