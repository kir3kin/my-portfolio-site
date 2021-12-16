import React, { useEffect } from "react"
import { Navigate, useParams } from "react-router-dom"

import { useAppDispatch, useAppSelector } from "@redux/hooks"
import { getProject, selectProjectInfo } from "@redux/reducers/projectSlice"

import { ProjectDesc } from "@components/Project/ProjectDesc"

import { ComeBack } from "@blocs/ComeBack"
import { LoadingError } from "@blocs/LoadingError"
import { Loader } from "@blocs/Loader"

import { HOME_LINK } from "@utils/default"

export const ProjectPage: React.FC = () => {
	const { id: projectId } = useParams<string>()
	const dispatch = useAppDispatch()
	
	useEffect(() => {
		if (projectId) dispatch(getProject(projectId))
	}, [dispatch])
	
	const { project, status } = useAppSelector(selectProjectInfo)

	return (
		<div className="wrapper">
			<div className="container">
			<ComeBack />
			{status === 'loading' && <Loader />}
			{status === 'failed' && <LoadingError name="Project page" />}
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