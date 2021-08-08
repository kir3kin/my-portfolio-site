import React from "react"
// import { iInfoProps } from '../interfaces/interfaces'

export const AboutInfoItem: React.FC<any> = ({
	info
}) => {
	const classes = ['private__item', `private__${info.className}`]
	
	return (
		<li className={classes.join(' ')}>
			<span>{info.title}: </span>
			{info.desc}
			{info.link && (
				<a className="private__link" href={info.link}>{info.link}</a>
			)}
		</li>
	)
}