import { useAppDispatch, useAppSelector } from "@redux/hooks"
import { getProjects, selectProjectsData } from "@redux/reducers/projectsSlice"
import { getTechnologies, selectTechsData } from "@redux/reducers/technologiesSlice"
import { getUsers, selectUsersData } from "@redux/reducers/usersSlice"
import React, { useEffect } from "react"

export const Dashboard: React.FC = () => {
	const dispatch = useAppDispatch()
	
	const { projects, status: projectStatus } = useAppSelector(selectProjectsData)
	const { techs, status: techsStatus } = useAppSelector(selectTechsData)
	const { users, status: usersStatus } = useAppSelector(selectUsersData)


	useEffect(() => {
		dispatch(getProjects())
		dispatch(getTechnologies())
		dispatch(getUsers())
	}, [dispatch])

	console.log('projects:', projects)
	console.log('techs:', techs)
	console.log('users:', users)


	return (
		<section className="admin-page">
			<div className="wrapper">
				<div className="container">
					<h1 className="admin-page__header header--stylish">Admin panel</h1>
					<div className="admin-page__wrapper">
						<div className="admin-page__item">
							<h2 className="admin-page__item__title">Projects:</h2>
							<ul className="admin-page__item__list">
								<li>
									<a href="/edit-project/:id">REST API</a>
								</li>
								<li>
									<a href="/edit-project/:id">Gulp</a>
								</li>
								<li>
									<a href="/edit-project/:id">WHS</a>
								</li>
							</ul>
							<a
								className="admin-page__item__button"
								href="/create-project/project"
							>Create new</a>
						</div>
						<div className="admin-page__item">
							<h2 className="admin-page__item__title">Projects:</h2>
							<ul className="admin-page__item__list">
								<li>
									<a href="/edit-project/:id">REST API</a>
								</li>
								<li>
									<a href="/edit-project/:id">Gulp</a>
								</li>
								<li>
									<a href="/edit-project/:id">WHS</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}