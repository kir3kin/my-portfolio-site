import React, { useEffect, useState } from "react"

import { useAppDispatch } from "@redux/hooks"
import { createInfo } from "@redux/reducers/projectSlice"

import { Info } from "@interfaces/project.interface"

import { ProjectInfo } from "./ProjectInfo"

import '@scss/components/Admin/Project/InfoList'


type InfoListType = Info[] | undefined

export const InfoList: React.FC<{
	infos: InfoListType,
	projectId: string
}> = ({ infos, projectId }) => {

	const dispatch = useAppDispatch()
	const [infosData, setInfosData] = useState<InfoListType>(undefined)
	const [newInfo, setNewInfo] = useState<string>('')

	useEffect(() => {
		setInfosData(infos)
	}, [infos])

	// ====== [START:] Handlers ====== \\
	const newInfoHandler = (e: React.ChangeEvent<HTMLInputElement>) => { setNewInfo(e.target.value) }

	const addInfoHandler = async () => {
		dispatch(createInfo({
			id: projectId,
			input: { title: newInfo }
		}))
		setNewInfo('')
	}
	// ====== [END:] Handlers ====== \\

	return (
		<div className="edit-project__info">
			<h3 className="edit-project__info__title">Project infos</h3>

			<div className="edit-project__info__add add-item">
				<label htmlFor="new-info">New info title</label>
				<input
					type="text"
					id="new-info"
					name="new-info"
					placeholder="Enter title"
					value={newInfo}
					onChange={newInfoHandler}
				/>
				<button
					type="button"
					disabled={!newInfo}
					onClick={addInfoHandler}
				>+</button>
			</div>

			{infosData && infosData.length > 0 && (
				<div className="edit-project__info__list">
					{infosData.map(info => (
						<ProjectInfo info={info} key={info.id} />
					))}
				</div>
			)}
		</div>
	)
}