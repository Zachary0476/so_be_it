import Login from '../pages/login'
import NotFound from '../pages/common/not-found'
import Index from '../pages/index'
import Home from '../pages/index/home'
console.log(Login);


export const errRoutes = [
	{
		path: '/login',
		component: Login,
	}, {
		path: '/404',
		component: NotFound,
	}
]
export const mainRoutes = [
	{
		path: '/index',
		component: Index,
		exact: true
	},
	{
		path: '/index/home',
		component: Home,
		exact: true
	}
]