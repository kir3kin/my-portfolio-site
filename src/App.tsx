import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ProjectsPage } from './pages/ProjectsPage'
import { AboutPage } from './pages/AboutPage'
import { Navbar } from './components/Navbar'

export const App: React.FC = () => (
	<BrowserRouter>
		{/* <Navbar /> */}
		<Switch>
			<Route component={ProjectsPage} path="/" exact />
			{/* <Route component={AboutPage} path="/about" /> */}
		</Switch>
	</BrowserRouter>
)