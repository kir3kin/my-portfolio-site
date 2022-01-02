import React, { useEffect, useState } from "react"

import { useAppDispatch, useAppSelector } from "@redux/hooks"
import { getTechnologies, selectTechnologyList } from "@redux/reducers/technologiesSlice"
import { updateTechs } from "@redux/reducers/projectSlice"

import { Technology } from "@interfaces/technology.interface"

import { getChosenTechs } from "@services/getChosenTechs"

import '@scss/components/Admin/Project/TechList'


export const TechList: React.FC<{
	projectTechs: Technology[] | undefined,
	projectId: string
}> = ({
	projectTechs, projectId
}) => {
	const dispatch = useAppDispatch()
	const { techs } = useAppSelector(selectTechnologyList)

	const defalultTechs = getChosenTechs(projectTechs)
	const [chosenTechs, setChosenTechs] = useState<number[]>(defalultTechs)
	const [isChanged, setIsChanged] = useState<boolean>(false)

	useEffect(() => {
		dispatch(getTechnologies())
	}, [dispatch])

	const techToggle = (id: string) => {
		const number = Number(id)
		const res = chosenTechs.find(techId => techId === number)

		if (res) setChosenTechs(prev => prev.filter(prevId => prevId !== number))
		else setChosenTechs(prev => ([ ...prev, number ]))

		setIsChanged(true)
	}

	const updateTechnologies = () => {
		dispatch(updateTechs({
			projectId,
			techIds: chosenTechs
		}))

		setIsChanged(false)
	}

	return (
		<>
			{techs && techs.length > 0 && (
				<div className="edit-project__techs">

					<div className="edit-project__techs__header">
						<h3>Technologies:</h3>
						<button
							type="button"
							className="button button--add"
							disabled={!isChanged}
							onClick={updateTechnologies}
						></button>
					</div>

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