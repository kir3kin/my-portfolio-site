import React from "react"
import { useNavigate } from "react-router-dom"
import { HOME_LINK } from "../utils/default"

export const ComeBack: React.FC = () => {
	const navigate = useNavigate()
	return <span onClick={() => {navigate('/')}} className="come_back">Back</span>
}