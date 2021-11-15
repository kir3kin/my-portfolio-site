import React, { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import { Loader } from "../components/Loader"
import { ProjectDesc } from "../components/ProjectDesc"
import { LoadingStatus } from "../interfaces/loading.interface"
import { iProject } from "../interfaces/project.interface"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { getProject, selectProjectData, selectProjectStatus } from "../redux/reducers/projectSlice"
import { HOME_LINK } from "../utils/default"

export const ProjectPage: React.FC = () => {
	const { id: projectId } = useParams<string>()
	const dispatch = useAppDispatch()
	
	useEffect(() => {
		dispatch(getProject(projectId))
	}, [dispatch])
	
	const project: iProject | null = useAppSelector(selectProjectData)
	const status = useAppSelector(selectProjectStatus)

	return (
		<div className="wrapper">
			<div className="container">
			{status === 'loading' && <Loader />}
			{status === 'failed' && <p>Error</p>}
			{status === 'loaded' && (
				project === null ? (
					<Navigate to={HOME_LINK} />
				) : (
					<ProjectDesc project={project} />
				)
			)}
			</div>
		</div>
	)
}