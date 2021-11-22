import React from "react"

interface iModalImage  {
	image: string,
	toggle: () => void
}

export const ModalImage: React.FC<iModalImage> = ({
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