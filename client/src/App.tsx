import React from 'react'
// import { Navbar } from '@components/Navbar'
import '@scss/App'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Page404 } from '@pages/Page404'
import { HomePage } from '@pages/HomePage'
import { ProjectPage } from '@pages/ProjectPage'

import { EditProjectPage } from '@pages/Admin/EditProjectPage'
import { AdminPage } from '@pages/Admin/AdminPage'

import { PrivateLayout } from '@layouts/private.layout'
import { PublicLayout } from '@layouts/public.layout'


export const App: React.FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="*" element={<Page404 />} />

			<Route path="/" element={<PublicLayout />}>
				<Route index element={<HomePage />} />
				<Route path="project/:id" element={<ProjectPage />} />
			</Route>

			<Route path="/admin" element={<PrivateLayout />} >
				<Route index element={<AdminPage />} />
				<Route path="edit-project/:id" element={<EditProjectPage />} />
			</Route>

		</Routes>
	</BrowserRouter>
)