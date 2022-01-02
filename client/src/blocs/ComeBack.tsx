import React from "react"
import { useNavigate } from "react-router-dom"

import '@scss/blocs/ComeBack'

export const ComeBack: React.FC = () => {
	const navigate = useNavigate()
	return (
		<span
			onClick={() => {navigate(-1)}}
			className="come_back"
		>Back</span>
	)
}