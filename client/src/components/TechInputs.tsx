import React, { useState } from "react"
import { LoadingStatus } from "../interfaces/loading.interface"
import { Technology } from "../interfaces/technology.interface"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { selectChosen } from "../redux/reducers/technologiesSlice"
import { Loader } from "./Loader"
import { TechItem } from "./TechInput"

interface iTechInputs {
	techs: Technology[],
	status: LoadingStatus
}

type Boxes = {
	id: string,
	checked: boolean
}

export const TechInputs: React.FC<iTechInputs> = ({
	techs, status
}) => {
	const dispatch = useAppDispatch()
	const [boxes, setBoxes] = useState<Boxes[]>([])
	const chosens = useAppSelector(selectChosen)

	// console.log('main chosens:', chosens)

	// use Memo | Callback
	
	{/* todo: add "click to filter" */}
	return (<>
		<h2 className="sidebar__header header--stylish">Technologies</h2>
		{status === 'loading' && <Loader />}
		{status === 'failed' && <p>Error</p>}
		{status === 'loaded' && techs.length && (
			<form className="tech" action="#">
				{techs.map(item => {
					return <TechItem 
						key={item.id}
						item={item}
						chosens={chosens}
					/>
				})}
			</form>
		)}
	</>)
}