import React, { useEffect } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"

import { useAppDispatch, useAppSelector } from "@redux/hooks"
import { getProject, selectProjectInfo } from "@redux/reducers/projectSlice"

import { ProjectDesc } from "@components/Project/ProjectDesc"

import { ComeBack } from "@blocs/ComeBack"
import { LoadingError } from "@blocs/LoadingError"
import { Loader } from "@blocs/Loader"


export const ProjectPage: React.FC = () => {
	const dispatch = useAppDispatch()
	const { id: projectId } = useParams<string>()
	const { project, status } = useAppSelector(selectProjectInfo)
	
	const navigate = useNavigate()
	if (!projectId) navigate(String(process.env.LINK_HOME))
	
	useEffect(() => {
		if (projectId) dispatch(getProject(projectId))
	}, [dispatch])
	

	return (
		<section className="projects-page">
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
		</section>
	)
}