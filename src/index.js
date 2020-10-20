import React from 'react'
import ReactDom from 'react-dom';
import App from './pages/App';

import { HashRouter, Switch, Route, Redirect } from 'react-router-dom' //引入routerdom
import { errRoutes } from '@/router/index' //引入routerdom

ReactDom.render(<HashRouter>
	<React.Suspense fallback='loading...'>
		<Switch>
			<Route path='/index' render={routeProps => <App {...routeProps} />} />
			{errRoutes.map(route => {
				return <Route key={route.path} {...route}></Route>
			})}
			<Redirect to="/404" />
		</Switch>
	</React.Suspense>
</HashRouter>, document.getElementById('app'));

