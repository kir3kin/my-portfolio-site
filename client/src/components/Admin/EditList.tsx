import React, { useState } from "react"
import { Link } from "react-router-dom"

import { User } from "@interfaces/auth.interface"
import { EditListType, iMainProjectData, ShortProjectData } from "@interfaces/project.interface"
import { Technology } from "@interfaces/technology.interface"
import { useAppDispatch } from "@redux/hooks"
import { createProject, removeProject } from "@redux/reducers/projectsSlice"


export const EditList: React.FC<{
	type: EditListType,
	list: iMainProjectData[]
}> = ({
	type, list
}) => {

	const dispatch = useAppDispatch()
	const [projectTitle, setProjectTitle] = useState<string>('')

	const addZero = (date: number) => date < 10 ? `0${date}` : date

	const getDate = (date: Date, time = false): string => {
		const d = new Date(date)
		if (time) {
			const minutes = addZero(d.getMinutes())
			const hours = addZero(d.getHours())
			const timeToShow = [hours, minutes]
			return timeToShow.join(':')
		} else {
			const day = addZero(d.getDate())
			const month = addZero(d.getMonth())
			const dateToShow = [day, month, d.getFullYear()]
			return dateToShow.join('/')
		}
	}

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setProjectTitle(e.target.value)
	}

	const addProjectHandler = () => {
		dispatch(createProject(projectTitle))
		setProjectTitle('')
	}

	const removeProjectHandler = (id: string) => {
		dispatch(removeProject(id))
	}


	return (
	<>
		{list && list.length > 0 && (
			<div className="admin-page__item">
				<h2 className="admin-page__item__title">{type} list:</h2>
				<table className="admin-page__item__table">
					<thead>
						<tr>
							<th>ID</th>
							<th>Title</th>
							<th>Created</th>
							<th>Updated</th>
							<th>Hidden</th>
							<th>Order</th>
							<th>Author</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{list.map(item => (
							<tr key={item.id}>
								<td>{item.id}</td>
								<td>{item.title}</td>
								<td>
									<span>
										{getDate(item.createdAt, true)}
									</span>
									<span>
										{getDate(item.createdAt)}
									</span>
								</td>
								<td>
									<span>
										{getDate(item.updatedAt, true)}
									</span>
									<span>
										{getDate(item.updatedAt)}
									</span>
								</td>
								<td>{item.isHidden ? 'true' : 'false'}</td>
								<td>{item.showOrder}</td>
								<td>{item.author.email}</td>
								<td>
									<div className="buttons">
										<Link
											to={`/edit-${type}/${item.id}`}
											className="button button--edit"
										></Link>
										<button
											type="button"
											className="button button--remove"
											onClick={() => removeProjectHandler(item.id)}
										>x</button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>


				<div className="admin-page__item__add-new add-info">
					<label htmlFor="new-project">Create project</label>
					<input
						type="text"
						name="title"
						placeholder="Enter project's title"
						id="new-project"
						value={projectTitle}
						onChange={changeHandler}
					/>
					<button
						type="button"
						disabled={!projectTitle}
						onClick={addProjectHandler}
					>+</button>
				</div>
			</div>
		)}
	</>
)}