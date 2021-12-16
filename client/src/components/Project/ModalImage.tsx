import React from "react"

export const ModalImage: React.FC<{
	image: string,
	toggle: () => void
}> = ({
	image, toggle
}) => (
	<div className="simple-modal">
		<span
			className="simple-modal__close"
			onClick={toggle}
		>x</span>
		<img
			className="simple-modal__img"
			src={image}
			alt=""
			onClick={toggle}
		/>
	</div>
)