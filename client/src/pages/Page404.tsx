import React from "react"
import { ComeBack } from "../components/ComeBack"

export const Page404: React.FC = () => {

	return (
		<div className="wrapper">
			<div className="container">
					<ComeBack />
					<h1 className="page-404 header--stylish">Page Not Found</h1>
			</div>
		</div>
	)
}