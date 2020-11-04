import React from 'react'
/* 固定路由 */
const Login = React.lazy(() => import(/* webpackChunkName: "login" */ `@/pages/login`))
const NotFound = React.lazy(() => import(/* webpackChunkName: "not-found" */ `@/pages/common/not-found`))
/* 核心路由 */
const Home = React.lazy(() => import(/* webpackChunkName: "index" */ `@/pages/home`))
const Index = React.lazy(() => import(/* webpackChunkName: "index" */ `@/pages/home/index`))
const SysManage = React.lazy(() => import(/* webpackChunkName: "index" */ `@/pages/home/sys-manage`))
// ...


/* -----------------------------------------对应以上固定路由 start----------------------------------------------------------------- */
export const errRoutes = [
	{
		path: '/login',
		component: Login,
		exact: true
	}, {
		path: '/404',
		component: NotFound,
		exact: true
	}
]
/* -----------------------------------------对应以上固定路由 end------------------------------------------------------------------- */

/* =========================================对应以上构建在App组件下的核心路由 start================================================= */
export const mainRoutes = [
	{
		path: '/home',
		component: Home,
		exact: true,
		children: [
			{
				path: '/home/index',
				component: Index,
				exact: true
			},
			{
				path: '/home/sys-manage',
				component: SysManage,
				exact: true
			},
		]
	},
	{
		path: '/other',
		component: Home,
		exact: true,
	}
]
/* =========================================对应以上构建在App组件下的核心路由 end=================================================== */
