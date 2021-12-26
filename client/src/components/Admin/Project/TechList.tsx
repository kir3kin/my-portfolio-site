import React, { useEffect, useState } from "react"

import { useAppDispatch, useAppSelector } from "@redux/hooks"
import { getTechnologies, selectTechnologyList } from "@redux/reducers/technologiesSlice"

import { Technology } from "@interfaces/technology.interface"

import { getChosenTechs } from "@services/getChosenTechs"


export const TechList: React.FC<{
	projectTechs: Technology[] | undefined
}> = ({
	projectTechs
}) => {
	const dispatch = useAppDispatch()
	const { techs } = useAppSelector(selectTechnologyList)

	const defalultTechs = getChosenTechs(projectTechs)
	const [chosenTechs, setChosenTechs] = useState<Number[]>(defalultTechs)

	useEffect(() => {
		dispatch(getTechnologies())
	}, [dispatch])

	const techToggle = (id: string) => {
		const number = Number(id)
		const res = chosenTechs.find(techId => techId === number)

		if (res) setChosenTechs(prev => prev.filter(prevId => prevId !== number))
		else setChosenTechs(prev => ([ ...prev, number ]))
	}

	return (
		<>
			{techs && techs.length > 0 && (
				<div className="edit-project__techs">
					<h3 className="edit-project__techs__header">Technologies:</h3>

					<div className="edit-project__tech-list">
						{techs.map(tech => {
							const checked = chosenTechs.find(chosenId => chosenId === Number(tech.id)) ? true : false
							
							return (
								<div key={tech.id} className="edit-project__tech-list__item">
									<label htmlFor={`tech-${tech.id}`}>{tech.title}</label>
									<input
										type="checkbox"
										id={`tech-${tech.id}`}
										defaultChecked={checked}
										onChange={() => techToggle(tech.id)}
									/>
								</div>
							)
						})}
					</div>
				</div>
			)}
		</>
	)
}