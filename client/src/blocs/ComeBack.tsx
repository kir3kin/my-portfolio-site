import React from "react"
import { useNavigate } from "react-router-dom"

export const ComeBack: React.FC = () => {
	const navigate = useNavigate()
	return (
		<span 
			onClick={() => {navigate('/')}}
			className="come_back"
		>
			Back
		</span>
	)
}