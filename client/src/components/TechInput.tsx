import React, { useState } from "react"
import { Technology } from "../interfaces/technology.interface"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { selectChosen, toggleTech } from "../redux/reducers/technologiesSlice"
import { getNormalName } from "../utils/technology"

interface iTechItem {
	item: Technology,
	chosens: string[]
}

export const TechItem: React.FC<iTechItem> = ({ item, chosens }) => {
	const dispatch = useAppDispatch()
	// const chosens = useAppSelector(selectChosen)

		// console.log('hi') 12  MEMOrize it
	const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(toggleTech(event.target.value))
	}
	// console.log('chosens:', chosens)
	
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
			/>
			<label
				className={`tech__label tech__label--${getNormalName(item.techType.title)}`}
				htmlFor={`tech-${item.id}`}
			>
				{item.title}
			</label>
		</>
	)

} 