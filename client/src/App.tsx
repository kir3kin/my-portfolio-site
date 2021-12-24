import React from 'react'
// import { Navbar } from '@components/Navbar'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { ProjectsPage } from './pages/ProjectsPage'
import { Page404 } from './pages/Page404'
import { ProjectPage } from './pages/ProjectPage'
import { AdminPage } from './pages/AdminPage'

import { EditProjectPage } from './pages/Admin/EditProjectPage'

import '@scss/App'

export const App: React.FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="*" element={ <Page404 /> } />
			<Route path="/" element={ <ProjectsPage /> } />
			<Route path="/project/:id" element={ <ProjectPage /> } />
			<Route path="/admin" element={ <AdminPage /> } />
			<Route path="/edit-project/:id" element={ <EditProjectPage /> } />
		</Routes>
	</BrowserRouter>
)