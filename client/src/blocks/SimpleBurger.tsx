import React, { useState } from "react"
import "../assets/scss/blocks/simpleBurger.scss"

export const SimpleBurger: React.FC = () => {
	const [burger, setBurger] = useState<boolean>(false)
	const burgerClasses = ['simple-burger']
	const openBurger = 'simple-burger--open'

	const burgerHandler = () => {
		setBurger(!burger)
	}

	if (burger) burgerClasses.push(openBurger)

	return (
		<div className={burgerClasses.join(' ')}>
			<input
				type="checkbox"
				id="tech-burger"
				onChange={burgerHandler}
			/>
			<label htmlFor="tech-burger"></label>
		</div>
	)
}