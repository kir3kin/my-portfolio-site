import React from "react"

import { useAppSelector } from "@redux/hooks"
import { selectChosen } from "@redux/reducers/technologiesSlice"

import { LoadingStatus } from "@interfaces/loading.interface"
import { Technology } from "@interfaces/technology.interface"

import { TechItem } from "@components/Public/Sidebar/Tech/TechItem"

import { Loader } from "@blocs/Loader"
import { LoadingError } from "@blocs/LoadingError"
import { NotFound } from "@blocs/NotFound"

import { Messages } from "@utils/messages"

import '@scss/components/Public/Sidebar/TechList'


interface iTechList {
	techs: Technology[],
	status: LoadingStatus
}

export const TechList: React.FC<iTechList> = ({
	techs, status
}) => {
	const chosens = useAppSelector(selectChosen)

	return (
		<>
			{status === 'loading' && <Loader />}
			{status === 'failed' && <LoadingError name="Technology filter" />}
			{status === 'idle' && (
				<div>
					<h2 className="sidebar__item__header header--stylish">
						[ Technologies ]
						<span>{Messages.techsTip}</span>
					</h2>
					{techs.length >= 1 ? (
						<form className="tech">
							{techs.map(item => (
								<TechItem 
									key={item.id}
									item={item}
									chosens={chosens}
								/>
							))}
						</form>
					) : (
						<NotFound name="techs" />
					)}
				</div>
			)}
		</>
	)
}