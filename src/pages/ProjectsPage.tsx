import React, { useState } from 'react'
import { ProjectItem } from '../components/ProjectItem'
import '../assets/scss/blocks/pages/projectsPage.scss'
// About projects data
import { projects } from '../temp/projects'
// About projects data
import { ModalProject } from '../Modal/ModalProject'
import { iOneProject } from "../interfaces/interfaces"

export const ProjectsPage: React.FC = () => {

	// === Modal window states
	// = Modal window content
	const [modalContent, setModalContent] = useState<iOneProject>()
	// = Modal window: open|close
	const [modal, setModal] = useState(false)
		
	const toggleModal = (open: boolean): void => {
		setModal(open)
	}

	const changeModalContent = (
		projectId: number,
		open: boolean
	): void => {
		toggleModal(open)
		setModalContent(projects.find(project => project.id === projectId))
	}
	
	return (
		<section className="portfolio">
			<div className="wrapper">
				<div className="portfolio__wrapper">
					<h1 className="portfolio__title">My projects</h1>
					<div className="portfolio__examples">
						<div className="portfolio__row">
							{projects.map(project => {
								return <ProjectItem
									key={project.id}
									project={project}
									changeModalContent={changeModalContent}
								/>
							})}
						</div>
					</div>
				</div>
			</div>
			<ModalProject
				isOpen={modal}
				toggleModal={toggleModal}
				modalContent={modalContent}
			/>
		</section>
	)
}