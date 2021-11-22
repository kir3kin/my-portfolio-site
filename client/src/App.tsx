import React from 'react'
// import { Navbar } from './components/Navbar'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './assets/scss/common.scss'
import { ProjectsPage } from './pages/ProjectsPage'
import { Page404 } from './pages/Page404'
import { ProjectPage } from './pages/ProjectPage'

export const App: React.FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="*" element={ <Page404 /> } />
			<Route path="/" element={ <ProjectsPage /> } />
			<Route path="/project/:id" element={ <ProjectPage /> } />
		</Routes>
	</BrowserRouter>
)