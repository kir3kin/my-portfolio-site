import React from 'react'
import { render } from 'react-dom'
import './assets/scss/main'
import { App } from './App'
import { Provider } from 'react-redux'
import { store } from './redux/store'

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
)