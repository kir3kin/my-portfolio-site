import React, { Fragment } from "react"
import { iProjectDescEl } from "../interfaces/projectsInterface"

type projectDescListProps = {
	elements: iProjectDescEl
}

export const ProjectDescList: React.FC<projectDescListProps> = ({elements}) => {
	return (
		<Fragment>
			{Object.keys(elements).map(e_id => {
				let liContent

				// link or not
				if (elements[e_id].link) {
					liContent = (
						<a
							target="_blank"
							href={elements[e_id].link}
							className="description__link">
							{elements[e_id].desc}
						</a>
					)
				} else {
					liContent = (
						<span>{elements[e_id].desc}</span>
					)
				}

				return (
					<li key={e_id}>
						{liContent}
						{elements[e_id].children && (
							<ul className="description__children">
								{elements[e_id].children.map((
									child: string,
									idx: number
								) => {
									return <li key={idx}>{child}</li>
								})}
							</ul>
						)}
					</li>
				)
			})}
		</Fragment>
	)
}