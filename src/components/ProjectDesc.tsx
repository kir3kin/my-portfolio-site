import React from "react"
import { ProjectDescList } from "./ProjectDescList"
import '../assets/scss/blocks/components/projectDesc.scss'
import { iProjectDesc } from "../interfaces/projectsInterface"

type projectDescProps = {
	description: iProjectDesc
}

export const ProjectDesc: React.FC<projectDescProps> = ({
	description
}) => {
	return (
		<div className="example__fulldesc description">
			{Object.keys(description).map(desc_id => {
				return (
					<div className="description__item" key={desc_id}>
						<h3 className="description__title">||=== {description[desc_id].title} ===||</h3>
						<ul className="description__list">
							<ProjectDescList elements={description[desc_id].elements} />
						</ul>
					</div>
				)
			})}
		</div>
	)
}