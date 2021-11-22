import React from "react"
import { LoadingStatus } from "../../interfaces/loading.interface"
import { Technology } from "../../interfaces/technology.interface"
import { useAppSelector } from "../../redux/hooks"
import { selectChosen } from "../../redux/reducers/technologiesSlice"
import { Loader } from "../../blocks/Loader"
import { TechItem } from "./TechItem"
import { LoadingError } from "../../blocks/LoadingError"
import { ComponentNotfound } from "../../blocks/ComponentNotfound"
import { Messages } from "../../utils/messages"
import { SimpleBurger } from "../../blocks/SimpleBurger"

interface iTechList {
	techs: Technology[],
	status: LoadingStatus
}

export const TechList: React.FC<iTechList> = ({
	techs, status
}) => {
	const chosens = useAppSelector(selectChosen)

	return (<>
		{status === 'loading' && <Loader />}
		{status === 'failed' && <LoadingError name="Technology filter" />}
		{status === 'loaded' && (
			<div>
				<SimpleBurger />
				<h2
					className="sidebar__header header--stylish"
				>
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
					<ComponentNotfound name="techs" />
				)}
			</div>
		)}
	</>)
}