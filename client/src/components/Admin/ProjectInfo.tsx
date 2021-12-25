import { Description, iDescInput, Info } from "@interfaces/project.interface"
import { useAppDispatch } from "@redux/hooks"
import { createDesc } from "@redux/reducers/projectSlice"
import React, { useState } from "react"
import { InfoItem } from "./InfoItem"


const defaultDesc = {
	title: '', link: ''
}

export const ProjectInfo: React.FC<{
	info: Info
}> = ({
	info
}) => {
	const dispatch = useAppDispatch()
	const [form, setForm] = useState<Info>(info)
	const [isChanged, setIsChanged] = useState<boolean>(false)
	const [desc, setDesc] = useState<iDescInput>(defaultDesc)

	const descDisabled = !(desc.title && desc.link)
	const descHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setDesc(prev => ({
			...prev,
			[e.target.name]: e.target.value
		}))
	}

	const addDescHandler = async () => {
		const result = await dispatch(createDesc({
			id: form.id,
			input: desc
		}))

		if (result.payload && typeof result.payload === 'string') {
			const newDesc = {id: result.payload, title: desc.title, link: desc.link, children: []}

			setForm(prev => {
				const oldDesc = prev.descriptions ? prev.descriptions : []
				if (prev) return { ...prev, descriptions: [ newDesc, ...oldDesc ] }
				return prev
			})

			setDesc(defaultDesc)
		}
	}


	const titleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm(prev => ({
			...prev, title: e.target.value
		}))
		setIsChanged(true)
	}


	return (
		<div className="info__item">

			<div className="info__item__title">
				<label htmlFor={`desc-${form.id}-title`}>Info title</label>
				<input
					type="text"
					name={`title-${form.id}`}
					id={`desc-${form.id}-title`}
					value={form.title}
					onChange={titleChangeHandler}
				/>
				{isChanged && (
					<span className="info__accept"></span>
				)}
			</div>

			<div className="add-desc">
				<div className="add-desc__control">
					<label htmlFor={`new-desc-title-${form.id}`}>New desc title</label>
					<input
						type="text"
						id={`new-desc-title-${form.id}`}
						name="title"
						placeholder="Enter title"
						value={desc.title}
						onChange={descHandler}
					/>
				</div>
				<div className="add-desc__control">
					<label htmlFor={`new-desc-link-${form.id}`}>New desc link</label>
					<input
						type="text"
						id={`new-desc-link-${form.id}`}
						name="link"
						placeholder="Enter link"
						value={desc.link}
						onChange={descHandler}
					/>
				</div>
				<div className="add-desc__control">
					<button
						type="button"
						disabled={descDisabled}
						onClick={addDescHandler}
					>+</button>
				</div>
			</div>


			{form.descriptions && form.descriptions.length > 0 && (
				<ul className="info__item__descs desc-list">
					{form.descriptions.map(item => (
						<InfoItem key={`${form.id}-${item.id}`} pId={form.id} item={item} />
					))}
				</ul>
			)}
		</div>
	)
}