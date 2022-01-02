import React from "react"
import { Outlet } from "react-router-dom"

import '@scss/blocs/Titles'

export const PublicLayout: React.FC = () => (
	<div className="wrapper">
		<div className="container">
			<Outlet />
		</div>
	</div>
)