import React from 'react'
import ReactDom from 'react-dom';
import App from './pages/App';
import { errRoutes } from '@/router/index'
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom'

ReactDom.render(<Router>
	<Route path="/index" render={routeProps => <App {...routeProps} />}></Route>
	<Switch>
		{errRoutes.map(route => { return <Route key={route.path} path={route.path} component={route.component}></Route> })}
	</Switch>
	<Redirect to="/404" />
</Router>, document.getElementById('app'));

