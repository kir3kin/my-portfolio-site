import React from "react"

import { iProject } from "@interfaces/project.interface"

import { InfoList } from "./InfoList"
import { TechList } from "./TechList"
import { ShortData } from "./ShortData"

export const ProjectForm: React.FC<{ project: iProject }> = ({ project }) => {

	// ====== [START:] Handlers ====== \\
	const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		// e.preventDefault();
	}

	return (
		<div className="edit-project">

			<h2 className="edit-project__header">Edit project</h2>

			<ShortData project={project} />

			<TechList projectTechs={project.technologies} />

			<InfoList infos={project.infos} projectId={project.id} />

			{/* <div className="edit-project__button">
				<button
					type="button"
					onClick={clickHandler}
				>Apply</button>
			</div> */}

		</div>
	)
}