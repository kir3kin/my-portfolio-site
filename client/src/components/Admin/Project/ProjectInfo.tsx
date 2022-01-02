import React, { useEffect, useState } from "react"

import { useAppDispatch } from "@redux/hooks"
import { createDesc, deleteInfo, updateInfo } from "@redux/reducers/projectSlice"

import { iDescInput, Info } from "@interfaces/project.interface"

import { InfoItem } from "./InfoItem"

import '@scss/components/Admin/Project/ProjectInfo'

const defaultDesc = { title: '', link: '' }

export const ProjectInfo: React.FC<{
	info: Info
}> = ({
	info,
}) => {
	const dispatch = useAppDispatch()
	const [form, setForm] = useState<Info>(info)
	const [newDesc, setNewDesc] = useState<iDescInput>(defaultDesc)
	const [isChanged, setIsChanged] = useState<boolean>(false)

	const descDisabled = !(newDesc.title && newDesc.link)

	useEffect(() => {
		setForm(info)
	}, [info])
	
	// ====== [START:] Handlers ====== \\
	// New Description's handlers
	const newDescHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewDesc(prev => ({
			...prev, [e.target.name]: e.target.value
		}))
	}

	const addNewDescHandler = async () => {
		dispatch(createDesc({
			id: form.id, input: newDesc
		}))
		setNewDesc(defaultDesc)
	}
	
	// Info's handlers
	const changeInfoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm(prev => ({
			...prev, title: e.target.value
		}))
		setIsChanged(true)
	}

	const updateInfoHandler = () => {
		dispatch(updateInfo({
			id: form.id,
			input: { title: form.title }
		}))
		setIsChanged(false)
	}

	const deleteInfoHandler = () => {
		dispatch(deleteInfo(form.id))
	}
	// ====== [END:] Handlers ====== \\


	return (
		<div className="info__item">
	
			<div className="info__item__title">
				<label htmlFor={`desc-${form.id}-title`}>Info title</label>
				<input
					type="text"
					name={`title-${form.id}`}
					id={`desc-${form.id}-title`}
					value={form.title}
					onChange={changeInfoHandler}
				/>
				<div className="buttons">
					<button
						type="button"
						className="button button--add"
						disabled={!isChanged}
						onClick={updateInfoHandler}
						></button>
					<button
						type="button"
						className="button button--remove"
						onClick={deleteInfoHandler}
					>x</button>
				</div>
			</div>

			<div className="add-desc">
				<div className="add-desc__control">
					<label htmlFor={`new-desc-title-${form.id}`}>New desc title</label>
					<input
						type="text"
						id={`new-desc-title-${form.id}`}
						name="title"
						placeholder="Enter title"
						value={newDesc.title}
						onChange={newDescHandler}
					/>
				</div>
				<div className="add-desc__control">
					<label htmlFor={`new-desc-link-${form.id}`}>New desc link</label>
					<input
						type="text"
						id={`new-desc-link-${form.id}`}
						name="link"
						placeholder="Enter link"
						value={newDesc.link}
						onChange={newDescHandler}
					/>
				</div>
				<div className="add-desc__control">
					<button
						type="button"
						disabled={descDisabled}
						onClick={addNewDescHandler}
					>+</button>
				</div>
			</div>

			{form.descriptions && form.descriptions.length > 0 && (
				<ul className="info__item__descs desc-list">
					{form.descriptions.map(item => (
						<InfoItem
							key={`${form.id}-${item.id}`}
							pId={form.id}
							item={item}
						/>
					))}
				</ul>
			)}
		</div>
	)
}