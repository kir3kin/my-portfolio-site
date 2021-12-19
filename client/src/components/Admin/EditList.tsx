import React from "react"

export const EditList: React.FC<{
	title: string,
	list: [
		{
			id: string,
			title: string
		}
	]
}> = ({ title, list }) => (
	<>
		{list && list.length > 0 && (
			<div className="admin-page__item">
				<h2 className="admin-page__item__title">{title}:</h2>
				<ul className="admin-page__item__list">
					{list.map(item => {
						<li>
						<a href={`/edit-project/${item.id}`}>{item.title}</a>
					</li>
					})}
				</ul>
				<a href="/create-project/project">Create new</a>
			</div>
		)}
	</>
)