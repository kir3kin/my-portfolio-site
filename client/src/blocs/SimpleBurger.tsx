import React, { useState } from "react"

export const SimpleBurger: React.FC = () => {
	const [burger, setBurger] = useState<boolean>(false)

	const burgerClasses = ['simple-burger']
	const openBurger = 'simple-burger--open'

	const burgerToggle = () => {
		setBurger(!burger)
	}

	if (burger) burgerClasses.push(openBurger)

	return (
		<div className={burgerClasses.join(' ')}>
			<input
				type="checkbox"
				id="tech-burger"
				onChange={burgerToggle}
			/>
			<label htmlFor="tech-burger"></label>
		</div>
	)
}