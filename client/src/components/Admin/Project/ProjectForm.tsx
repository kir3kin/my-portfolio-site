import React from "react"

import { iProject } from "@interfaces/project.interface"

import { InfoList } from "./InfoList"
import { TechList } from "./TechList"
import { ShortData } from "./ShortData"

import '@scss/components/Admin/Project/ProjectForm'

export const ProjectForm: React.FC<{ project: iProject }> = ({ project }) => (
	<div className="edit-project">

		<h2 className="edit-project__header">Edit project</h2>

		<ShortData project={project} />

		<TechList projectTechs={project.technologies} projectId={project.id} />

		<InfoList infos={project.infos} projectId={project.id} />

	</div>
)