import React, { useEffect } from "react"

import { useAppDispatch, useAppSelector } from "@redux/hooks"
import {
	getTechnologies,
	selectTechnologyList,
	setDefaultChosen
} from "@redux/reducers/technologiesSlice"

import lsAPI from "@services/LocalStorage.API"
import { StorageType } from "@interfaces/services.interface"

import { TechList } from "@components/Public/Sidebar/Tech/TechList"

import '@scss/components/Public/Sidebar/Sidebar'
import { SimpleBurger } from "@blocs/SimpleBurger"


export const Sidebar: React.FC = () => {
	const dispatch = useAppDispatch()

	const { techs, status: tecsStatus } = useAppSelector(selectTechnologyList)

	useEffect(() => {
		const localChosens = lsAPI.getStorageData({
			storage: StorageType.FILTER,
			field: 'chosens'
		})

		if (
			typeof localChosens !== 'string' &&
			localChosens.length > 0
		) dispatch(setDefaultChosen(localChosens))

		dispatch(getTechnologies())
	}, [dispatch])

	return (
		<aside className="sidebar">
			<SimpleBurger />
			<div className="sidebar__item">
				<TechList
					techs={techs}
					status={tecsStatus}
				/>
			</div>
		</aside>
	)
}