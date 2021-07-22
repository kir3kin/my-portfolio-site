import React, { Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { render } from 'react-dom'
import './assets/scss/main'
import { ProjectsPage } from './pages/ProjectsPage'
import { AboutPage } from './pages/AboutPage'
import { Navbar } from './components/Navbar'

const App: React.FC = () => (
	<BrowserRouter>
	<Fragment>
		{/* <Navbar /> */}
		<Switch>
			<Route component={ProjectsPage} path="/" exact />
			{/* <Route component={AboutPage} path="/about" /> */}
		</Switch>
		</Fragment>
	</BrowserRouter>
)

render(<App />, document.getElementById('app'))