import { User } from "@interfaces/auth.interface"
import { EditListType, ShortProjectData } from "@interfaces/project.interface"
import { Technology } from "@interfaces/technology.interface"
import React from "react"
import { Link } from "react-router-dom"

export const EditList: React.FC<{
	type: EditListType,
	list: ShortProjectData[] | Technology[]
}> = ({
	type, list
}) => {

	console.log('list:', list)
	return (
	<>
		{list && list.length > 0 && (
			<div className="admin-page__item">
				<h2 className="admin-page__item__title">{type} list:</h2>
				<ul className="admin-page__item__list">
					{list.map(item => (
						<li key={item.id}>
							<Link to={`/edit-${type}/${item.id}`}>{item.title}</Link>
						</li>
					))}
				</ul>
				<a href={`/create-${type}`}>Create new</a>
			</div>
		)}
	</>
)}