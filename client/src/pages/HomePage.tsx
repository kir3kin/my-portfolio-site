import React, { useEffect, useMemo } from "react"

import { useAppDispatch, useAppSelector } from "@redux/hooks"
import { getProjects, makeSelectProjectsByTechs } from "@redux/reducers/projectsSlice"
import { getTechnologies, selectTechnologyList, setDefaultChosen } from "@redux/reducers/technologiesSlice"

import { TechList } from "@components/Tech/TechList"
import { ProjectList } from "@components/Project/ProjectList"

import { StorageType } from "@interfaces/services.interface"

import lsAPI from "@services/localStorage.API"

import '@scss/pages/HomePage'


export const HomePage: React.FC = () => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		const localChosens = lsAPI.getStorageData({
			storage: StorageType.FILTER,
			field: 'chosens'
		})

		if (
			typeof localChosens !== 'string' &&
			localChosens.length > 0
		) dispatch(setDefaultChosen(localChosens))

		dispatch(getProjects())
		dispatch(getTechnologies())
	}, [dispatch])

	const selectProjectsByTechs = useMemo(makeSelectProjectsByTechs, [])
	const { techs, status: tecsStatus } = useAppSelector(selectTechnologyList)
	const { projects, status: projectsStatus } = useAppSelector(selectProjectsByTechs)

	return (
		<section className="home-page">
			<TechList
				techs={techs}
				status={tecsStatus}
			/>
			<ProjectList
				projects={projects}
				status={projectsStatus}
			/>
		</section>
	)
}