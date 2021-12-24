import React, { useEffect } from "react"
import { useParams } from "react-router-dom"

import { useAppDispatch, useAppSelector } from "@redux/hooks"
import { getProject, selectProjectInfo } from "@redux/reducers/projectSlice"

import { ProjectForm } from "@components/Admin/ProjectForm"

import { Loader } from "@blocs/Loader"
import { LoadingError } from "@blocs/LoadingError"

export const EditProjectPage: React.FC = () => {
	const dispatch = useAppDispatch()
	const { id: projectId } = useParams<string>()
	const { project, status } = useAppSelector(selectProjectInfo)

	useEffect(() => {
		if (projectId) dispatch(getProject(projectId))
	}, [dispatch])

	return (
		<section className="admin-page">
			<div className="wrapper">
				<div className="container">
					{status === 'loading' && <Loader />}
					{status === 'failed' && <LoadingError name="Project page" />}
					{status === 'idle' && project !== null && (
						<ProjectForm project={project} />
					)}
				</div>
			</div>
		</section>
	)
}