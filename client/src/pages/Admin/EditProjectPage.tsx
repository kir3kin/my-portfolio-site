import React, { useEffect } from "react"
import { useParams } from "react-router-dom"

import { useAppDispatch, useAppSelector } from "@redux/hooks"
import { getProject, selectSortedProjectInfo } from "@redux/reducers/projectSlice"

import { ProjectForm } from "@components/Admin/Project/ProjectForm"

import { Loader } from "@blocs/Loader"
import { ComeBack } from "@blocs/ComeBack"
import { LoadingError } from "@blocs/LoadingError"


export const EditProjectPage: React.FC = () => {
	const dispatch = useAppDispatch()
	const { id: projectId } = useParams<string>()
	const { project, status } = useAppSelector(selectSortedProjectInfo)

	useEffect(() => {
		if (projectId) dispatch(getProject(projectId))
	}, [dispatch])

	return (
		<section className="admin-page">
			{/* <div className="wrapper"> */}
				{/* <div className="container"> */}
					<ComeBack />
					{status === 'loading' && <Loader />}
					{status === 'failed' && <LoadingError name="Project page" />}
					{status === 'idle' && project !== null && (
						<ProjectForm project={project} />
					)}
				{/* </div> */}
			{/* </div> */}
		</section>
	)
}