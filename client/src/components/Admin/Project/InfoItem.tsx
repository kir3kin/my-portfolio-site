import React, { useState } from "react"

import { deleteDesc, updateDesc } from "@redux/reducers/projectSlice"
import { useAppDispatch } from "@redux/hooks"

import { Description } from "@interfaces/project.interface"

import '@scss/components/Admin/Project/InfoItem'


export const InfoItem: React.FC<{
	pId: string,
	item: Description
}> = ({
	pId, item
}) => {

	const dispatch = useAppDispatch()
	const [formItem, setFormItem] = useState<Description>(item)
	const [isChanged, setIsChanged] = useState<boolean>(false)


	// ====== [START:] Handlers ====== \\
	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormItem(prev => ({
			...prev, [e.target.name]: e.target.value
		}))

		setIsChanged(true)
	}

	const updateDescHandler = () => {
		dispatch(updateDesc({
			id: formItem.id,
			input: { 
				title: formItem.title,
				link: formItem.link
			}
		}))
		setIsChanged(false)
	}

	const deleteDescHandler = () => {
		dispatch(deleteDesc(formItem.id))
	}
	// ====== [END:] Handlers ====== \\

	return (
		<li className="desc-list__item">
			<div className="desc-list__item__title">
				<label htmlFor={`desc-${pId}-item-${formItem.id}-title`}>
					Item title
				</label>
				<input
					type="text"
					name={`title`}
					id={`desc-${pId}-item-${formItem.id}-title`}
					value={formItem.title}
					onChange={changeHandler}
					/>
			</div>
			<div className="desc-list__item__link">
				<label htmlFor={`desc-${pId}-item-${formItem.id}-link`}>
					Item link
				</label>
				<input
					type="text"
					name={`link`}
					id={`desc-${pId}-item-${formItem.id}-link`}
					value={formItem.link}
					onChange={changeHandler}
				/>
			</div>
			<div className="buttons">
				<button
					type="button"
					className="button button--add"
					disabled={!isChanged}
					onClick={updateDescHandler}
				></button>
				<button
					type="button"
					className="button button--remove"
					onClick={deleteDescHandler}
				>x</button>
			</div>

			{/* <div className="desc-list__item__description">
				<label htmlFor="desc-1-item-1-description"></label>
				<textarea
					name="desc-1-item-1-description"
					id="desc-1-item-1-description"
				></textarea>
			</div> */}
		</li>
	)
}