import React, { useState } from "react"

import { Description } from "@interfaces/project.interface"

export const InfoItem: React.FC<{
	pId: string,
	item: Description
}> = ({
	pId, item
}) => {
	const [formItem, setFormItem] = useState<Description>(item)
	const [isChanged, setIsChanged] = useState<{
		title: boolean,
		link: boolean
	}>({
		title: false,
		link: false
	})

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormItem(prev => ({
			...prev, [e.target.name]: e.target.value
		}))

		setIsChanged(prev => ({
			...prev,
			[e.target.name]: true
		}))
	}

	return (
		<li className="desc-list__item">
			<div className="desc-list__item__title">
				<label htmlFor={`desc-${pId}-item-${formItem.id}-title`}>
					Item title
					{isChanged.title && (
						<span className="info__accept"></span>
					)}
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
					{isChanged.link && (
						<span className="info__accept"></span>
					)}
				</label>
				<input
					type="text"
					name={`link`}
					id={`desc-${pId}-item-${formItem.id}-link`}
					value={formItem.link}
					onChange={changeHandler}
				/>
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