import React from "react"
import { Outlet } from "react-router-dom"

export const PublicLayout: React.FC = () => (
	<div className="wrapper">
		<div className="container">
			<Outlet />
		</div>
	</div>
)