import React from 'react'
/* 固定路由 */
const Login = React.lazy(() => import(/* webpackChunkName: "login" */ `@/pages/login`))
const notFound = React.lazy(() => import(/* webpackChunkName: "not-found" */ `@/pages/common/not-found`))
/* 核心路由 */
const Index = React.lazy(() => import(/* webpackChunkName: "index" */ `@/pages/index`))
const Home = React.lazy(() => import(/* webpackChunkName: "/home" */ `@/pages/home`))
// ...


/* -----------------------------------------对应以上固定路由 start----------------------------------------------------------------- */
export const errRoutes = [
	{
		path: '/login',
		component: Login,
		exact: true
	}, {
		path: '/404',
		component: notFound,
		exact: true
	}
]
/* -----------------------------------------对应以上固定路由 end------------------------------------------------------------------- */

/* =========================================对应以上构建在App组件下的核心路由 start================================================= */
export const mainRoutes = [
	{
		path: '/index',
		component: Index,
		exact: true
	},
	{
		path: '/home',
		component: Home,
		exact: true
	}
]
/* =========================================对应以上构建在App组件下的核心路由 end=================================================== */
