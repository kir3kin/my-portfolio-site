import React from "react"

import { useAppDispatch } from "@redux/hooks"
import { toggleTech } from "@redux/reducers/technologiesSlice"

import { Technology } from "@interfaces/technology.interface"

import { getNormalName } from "@services/normaName"

interface iTechItem {
	item: Technology,
	chosens: string[]
}

export const TechItem: React.FC<iTechItem> = ({ item, chosens }) => {
	const dispatch = useAppDispatch()

	// TODO: console.log('hi') 12  MEMOrize it

	const changeHandler = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		const id = e.target.value
		dispatch(toggleTech(id))
	}
	
	const chosen: boolean = (chosens.length >= 1) && (
		!!(chosens.find(chosenId => chosenId === item.id))
	)

	return (
		<>
			<input
				type="checkbox"
				id={`tech-${item.id}`}
				className="tech__input"
				value={`${item.id}`}
				checked={chosen}
				onChange={changeHandler}
				onTouchStart={(e) => {e.preventDefault()}}
			/>
			<label
				className={`
					tech__label
					tech__label--${getNormalName(item.techType.title)}
				`}
				htmlFor={`tech-${item.id}`}
			>
				{item.title}
			</label>
		</>
	)

} 