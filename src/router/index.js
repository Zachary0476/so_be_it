import React from 'react'
/* 固定路由 */
const Login = React.lazy(() => import(/* webpackChunkName: "login" */ `@/pages/login`))
const NotFound = React.lazy(() => import(/* webpackChunkName: "not-found" */ `@/pages/common/not-found`))
/* 核心路由 */
const Welcome = React.lazy(() => import(/* webpackChunkName: "index" */ `@/pages/welcome`))
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
		path: '/welcome',
		component: Welcome,
		exact: true
	}
]
/* =========================================对应以上构建在App组件下的核心路由 end=================================================== */
