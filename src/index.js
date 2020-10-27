import React from 'react'
import ReactDom from 'react-dom';
import App from './pages/App';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom' //引入routerdom
import { errRoutes } from '@/router/index' //引入routerdom
import { Provider } from 'react-redux';
import store from './store';

// 通过Provider连接react和redux
ReactDom.render(<Provider store={store}>
	<HashRouter>
		<React.Suspense fallback='loading...'>
			<Switch>
				<Route path='/auth' render={routeProps => <App {...routeProps} />} />
				{errRoutes.map(route => {
					return <Route key={route.path} {...route}></Route>
				})}
				<Redirect to="/404" />
			</Switch>
		</React.Suspense>
	</HashRouter>
</Provider>, document.getElementById('app'));

