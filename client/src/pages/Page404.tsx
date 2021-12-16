import React from "react"
import { ComeBack } from "../blocs/ComeBack"

export const Page404: React.FC = () => {

	return (
		<div className="wrapper">
			<div className="container">
				<ComeBack />
				<div className="page-404">
					<h1
						className="page-404__title header--stylish"
					>Page Not Found</h1>
					<h2
						className="page-404__subtitle"
					>Error 404</h2>
				</div>
			</div>
		</div>
	)
}