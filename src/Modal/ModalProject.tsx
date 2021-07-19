import React, { Fragment, useRef } from 'react'
import '../assets/scss/modal/modal.scss'
import { ModalProjectList } from './ModalProjectList'
import { iOneProject } from "../interfaces/interfaces"

interface iModalProps {
	isOpen: boolean
	modalContent: iOneProject | undefined
	toggleModal(open: boolean): void
}

export const ModalProject: React.FC<iModalProps> = ({
	isOpen,
	modalContent,
	toggleModal
}) => {
	// to close modal window, when we click on the area, outside of the modal body
	const ref = useRef<HTMLDivElement>(null)

	const closeModal = (event: React.MouseEvent<HTMLDivElement>) => {
				if (ref.current === event.target) {
			toggleModal(false)
		}
	}

	return (
		<Fragment>
			{isOpen && modalContent && (

				<div ref={ref} className="modal" onClick={(event) => closeModal(event)}>

					<div className="modal__body">
						<h2 className="modal__title">
							{`${modalContent.mainInfo.title} ${modalContent.mainInfo.desc}`}
						</h2>
						<div className="modal__content">
							{modalContent.fullDesc.map(description => {
								return (
									<div
										key={description.id}
										className="modal__content-item content-item"
									>
										<h3 className="content-item__title">||=== {description.title} ===||</h3>
										<ModalProjectList elements={description.elements} key={description.id} />
									</div>
								)
							})}
						</div>
						<button
							className="modal__close"
							onClick={() => toggleModal(false)}
						>&times;</button>
					</div>
				</div>
			)}
		</Fragment>
	)
}