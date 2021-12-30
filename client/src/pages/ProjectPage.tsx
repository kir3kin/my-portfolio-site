import React, { useEffect } from "react"
import { Navigate, useParams } from "react-router-dom"

import { useAppDispatch, useAppSelector } from "@redux/hooks"
import { getProject, selectProjectInfo } from "@redux/reducers/projectSlice"

import { ProjectDesc } from "@components/Project/ProjectDesc"

import { ComeBack } from "@blocs/ComeBack"
import { LoadingError } from "@blocs/LoadingError"
import { Loader } from "@blocs/Loader"


export const ProjectPage: React.FC = () => {
	const { id: projectId } = useParams<string>()
	const dispatch = useAppDispatch()
	
	useEffect(() => {
		if (projectId) dispatch(getProject(projectId))
	}, [dispatch])
	
	const { project, status } = useAppSelector(selectProjectInfo)

	return (
		<div className="projects-page">
			<div className="wrapper">
				<div className="container">
				<ComeBack />
				{status === 'loading' && <Loader />}
				{status === 'failed' && <LoadingError name="Project page" />}
				{status === 'idle' && (
					project === null ? (
						<Navigate to={String(process.env.LINK_HOME)} />
					) : (
						<ProjectDesc project={project} />
					)
				)}
				</div>
			</div>
		</div>
	)
}