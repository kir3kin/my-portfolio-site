import React from "react"
import { iProjectElemnts } from '../interfaces/interfaces'

export const ModalProjectList: React.FC<iProjectElemnts> = ({ elements }) => {

	return (
		<ul className="content-item__list">
			{elements.map(element => {
				let liContent

				// link or not
				if (element.link) {
					liContent = (
						<a
							href={element.link}
							className="content-item__link">
							{element.desc}
						</a>
					)
				} else {
					liContent = (
						<span>{element.desc}</span>
					)
				}

				return (
					<li key={element.id}>
						{liContent}
						{element.children && (
							<ul className="content-item__children">
								{element.children.map((child, idx) => {
									return <li key={idx}>{child}</li>
								})}
							</ul>
						)}
					</li>
				)
			})}
		</ul>
	)
}